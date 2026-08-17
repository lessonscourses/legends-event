import { type NextRequest, NextResponse } from "next/server"

const WAZZUP_BASE = "https://api.wazzup24.com/v3"

type ApplyPayload = {
  fullName?: string
  email?: string
  phone?: string
  company?: string
  role?: string
  revenue?: string
  linkedin?: string
  consent?: boolean
}

// Wazzup chatId for WhatsApp must be digits only (no "+", spaces or dashes)
function normalizePhone(phone: string): string {
  return (phone || "").replace(/\D/g, "")
}

async function wazzupFetch(path: string, apiKey: string, init?: RequestInit) {
  return fetch(`${WAZZUP_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  })
}

// Pick an active WhatsApp channel automatically from the account
async function resolveWhatsAppChannelId(apiKey: string): Promise<string | null> {
  const res = await wazzupFetch("/channels", apiKey, { method: "GET" })
  if (!res.ok) {
    console.log("[v0] Wazzup /channels failed:", res.status, await res.text().catch(() => ""))
    return null
  }
  const channels = (await res.json()) as Array<{
    channelId: string
    transport: string
    state: string
  }>

  const whatsappTransports = ["whatsapp", "wapi", "wba"]
  const usable = channels.filter((c) => whatsappTransports.includes(c.transport))
  // Prefer an active channel, otherwise fall back to the first WhatsApp channel
  const active = usable.find((c) => c.state === "active")
  return (active || usable[0])?.channelId ?? null
}

async function sendMessage(apiKey: string, channelId: string, phone: string, text: string) {
  const chatId = normalizePhone(phone)
  if (!chatId) return { ok: false, error: "empty phone" }

  const res = await wazzupFetch("/message", apiKey, {
    method: "POST",
    body: JSON.stringify({
      channelId,
      chatType: "whatsapp",
      chatId,
      text,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => "")
    console.log("[v0] Wazzup /message failed:", res.status, body)
    return { ok: false, error: `${res.status} ${body}` }
  }
  return { ok: true }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.WAZZUP_API_KEY
  const ownerPhone = process.env.WAZZUP_OWNER_PHONE

  if (!apiKey) {
    return NextResponse.json({ error: "WhatsApp is not configured" }, { status: 500 })
  }

  let data: ApplyPayload
  try {
    data = (await req.json()) as ApplyPayload
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const fullName = (data.fullName || "").trim()
  const applicantPhone = (data.phone || "").trim()

  const channelId = await resolveWhatsAppChannelId(apiKey)
  if (!channelId) {
    return NextResponse.json({ error: "No active WhatsApp channel found" }, { status: 502 })
  }

  const applicantText =
    `Hi ${fullName || "there"}! 👋\n\n` +
    `Thanks for applying to Legends. We've received your application and our team will review it personally within 72 hours.\n\n` +
    `We'll be in touch soon.`

  const ownerText =
    `🔔 New Legends application\n\n` +
    `Name: ${fullName || "—"}\n` +
    `Email: ${data.email || "—"}\n` +
    `Phone: ${applicantPhone || "—"}\n` +
    `Company: ${data.company || "—"}\n` +
    `Role: ${data.role || "—"}\n` +
    `Revenue: ${data.revenue || "—"}\n` +
    `LinkedIn: ${data.linkedin || "—"}\n` +
    `Consent: ${data.consent ? "yes" : "no"}`

  const results = await Promise.allSettled([
    applicantPhone ? sendMessage(apiKey, channelId, applicantPhone, applicantText) : Promise.resolve({ ok: false }),
    ownerPhone ? sendMessage(apiKey, channelId, ownerPhone, ownerText) : Promise.resolve({ ok: false }),
  ])

  const applicantSent = results[0].status === "fulfilled" && results[0].value.ok
  const ownerSent = results[1].status === "fulfilled" && results[1].value.ok

  // Application succeeds as long as we reached the API; per-message delivery is best-effort
  return NextResponse.json({ ok: true, applicantSent, ownerSent })
}
