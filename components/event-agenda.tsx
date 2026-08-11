import { CalendarDays, Compass, DoorClosed } from "lucide-react"
import { Reveal } from "./reveal"

const timeChips = [
  { city: "Dubai", time: "5:00 PM" },
  { city: "London", time: "2:00 PM" },
  { city: "New York", time: "9:00 AM" },
]

const agenda = [
  {
    icon: Compass,
    step: "01",
    title: "The Reflective Operator's Playbook",
    speaker: "Julius Bachmann, Founder, Bachmann Catalyst",
    desc: "Why your highest-leverage decisions can't be delegated, what relational responsibility looks like in practice, and how the best CEOs stay human while scaling from 100 to 1,000 people.",
  },
  {
    icon: DoorClosed,
    step: "02",
    title: "The Closed Room",
    speaker: "Legends members only",
    desc: "A small-group conversation with Julius straight after the talk. Real questions, direct answers, and networking with the speaker.",
  },
]

export function EventAgenda() {
  return (
    <section id="agenda" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">How it runs</p>

          {/* Date + timezone strip */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight sm:text-xl">
              <CalendarDays className="h-6 w-6 shrink-0 text-primary" />
              Tuesday, 25 August 2026
            </span>
            <span className="flex flex-wrap items-center divide-x divide-border/70 text-sm text-muted-foreground">
              {timeChips.map((t) => (
                <span key={t.city} className="px-3 first:pl-0">
                  <span className="font-semibold text-foreground">{t.time}</span> {t.city}
                </span>
              ))}
              <span className="px-3 uppercase tracking-[0.14em] text-primary">Online</span>
            </span>
          </div>
        </Reveal>

        {/* Agenda */}
        <div className="mt-12">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Agenda</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {agenda.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal
                  key={a.step}
                  delay={i * 90}
                  className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">{a.step}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.12em] text-primary">{a.speaker}</p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
