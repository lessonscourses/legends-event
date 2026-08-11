import { CalendarDays, Compass, DoorClosed, Video } from "lucide-react"
import { Reveal } from "../reveal"

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

          {/* Date — the anchor, big and clear */}
          <div className="mt-5 flex items-center gap-3">
            <CalendarDays className="h-8 w-8 shrink-0 text-primary sm:h-10 sm:w-10" />
            <span className="text-2xl font-bold tracking-tight sm:text-4xl">Tuesday, 25 August 2026</span>
          </div>

          {/* Timezones — clean grid so nothing piles up on mobile */}
          <div className="mt-6 grid w-full max-w-md grid-cols-3 overflow-hidden rounded-xl border border-border sm:w-auto">
            {timeChips.map((t, i) => (
              <div
                key={t.city}
                className={`flex flex-col items-center bg-card px-4 py-4 sm:items-start sm:px-6 ${
                  i > 0 ? "border-l border-border" : ""
                }`}
              >
                <span className="text-lg font-bold leading-none sm:text-2xl">{t.time}</span>
                <span className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">{t.city}</span>
              </div>
            ))}
          </div>

          {/* Online + the closed-room story */}
          <div className="mt-6 rounded-xl border border-primary/25 bg-primary/[0.05] p-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Video className="h-4 w-4" />
              Online · closed room
            </span>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              The entire session runs online, behind closed doors — a small, hand-picked group with cameras on. Direct
              access to the speaker and the kind of candid, unfiltered conversation that only happens in a room this
              private.
            </p>
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
