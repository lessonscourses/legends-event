"use client"

import { useState } from "react"
import { Check, Loader2, MessageCircle } from "lucide-react"

// TODO: подставь реальный номер WhatsApp-канала (в международном формате, только цифры).
// Например для +971 50 000 0000 -> "971500000000". Ссылка вида https://wa.me/<номер>.
// Можно вынести в NEXT_PUBLIC_WHATSAPP_PHONE и заменить строку ниже на process.env.NEXT_PUBLIC_WHATSAPP_PHONE.
const WHATSAPP_PHONE = "971500000000"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`

type FormState = {
  fullName: string
  phone: string
  linkedin: string
  consent: boolean
}

const initial: FormState = {
  fullName: "",
  phone: "",
  linkedin: "",
  consent: false,
}

export function RegistrationForm({ sendWhatsApp = false }: { sendWhatsApp?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")
  const [form, setForm] = useState<FormState>(initial)

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const target = e.target
      const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value
      setForm((f) => ({ ...f, [key]: value }))
    }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")

    if (sendWhatsApp) {
      try {
        await fetch("/api/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        })
      } catch (err) {
        console.log("[v0] apply request failed:", err)
      }
    } else {
      await new Promise((r) => setTimeout(r, 900))
    }

    setStatus("done")
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-4 px-2 py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary text-primary">
          <Check className="h-7 w-7" strokeWidth={2.2} />
        </span>
        <h3 className="text-2xl font-semibold">Application submitted</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Thanks — we&apos;ve received your application and our team will be in touch with you shortly.
        </p>

        <div className="mt-2 w-full rounded-2xl border border-border/60 bg-card/40 p-5">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Want to get ahead? Join us and ask your questions directly in our WhatsApp channel.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full gold-fill px-6 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Join us on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required className="sm:col-span-2">
          <input required value={form.fullName} onChange={update("fullName")} placeholder="Your full name" className={inputClass} />
        </Field>
        <Field label="Phone (with country code)" required className="sm:col-span-2">
          <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="+971 50 000 0000" className={inputClass} />
        </Field>
        <Field label="LinkedIn URL" optional className="sm:col-span-2">
          <input
            type="url"
            value={form.linkedin}
            onChange={update("linkedin")}
            placeholder="https://linkedin.com/in/..."
            className={inputClass}
          />
        </Field>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={update("consent")}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]"
        />
        <span>
          Legends may contact me by phone, SMS, and messaging apps about my application, events, and related offers, and
          such calls may be recorded. I can withdraw at any time. <span className="opacity-70">(Optional)</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full gold-fill px-6 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting
          </>
        ) : (
          <>Submit · We&apos;ll review &amp; be in touch →</>
        )}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="#" className="text-primary underline-offset-2 hover:underline">
          Terms
        </a>{" "}
        &amp;{" "}
        <a href="#" className="text-primary underline-offset-2 hover:underline">
          Privacy
        </a>
        .
      </p>
    </form>
  )
}

const inputClass =
  "gold-input w-full rounded-xl px-4 py-3 text-sm text-foreground outline-none"

function Field({
  label,
  optional,
  required,
  help,
  className = "",
  children,
}: {
  label: string
  optional?: boolean
  required?: boolean
  help?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
        {optional && <span className="ml-1 normal-case tracking-normal opacity-70">(optional)</span>}
      </span>
      {children}
      {help && <span className="text-xs normal-case tracking-normal text-muted-foreground/70">{help}</span>}
    </label>
  )
}
