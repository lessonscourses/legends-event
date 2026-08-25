import { Compass, Brain, DoorClosed, Check, X } from "lucide-react"
import { Reveal } from "./reveal"

const agenda = [
  {
    icon: Compass,
    step: "01",
    title: "The Journey",
    desc: "From building consulting practices inside PwC and Protiviti to leaving the established structure and putting his own reputation behind a distributed firm — the decisions, doubts and turning points that became a model of his own.",
  },
  {
    icon: Brain,
    step: "02",
    title: "The Hacks",
    desc: "How to make one company out of people who don't work for one company: winning B2B trust, selecting the right experts, aligning project teams, protecting quality and scaling delivery without losing accountability.",
  },
  {
    icon: DoorClosed,
    step: "03",
    title: "The Closed Room",
    desc: "Legends members only. A small-group chat, Q&A and intros with Varun straight after the talk.",
  },
]

const forYou = [
  "Founders, CEOs and operators scaling companies and teams — asking what needs to change as the business grows",
  "Investors and leaders drawn to the decisions, trade-offs and personal side of building at scale",
  "Anyone building a distributed team who wants it to feel as reliable as an established firm",
]

const notForYou = ["Anyone looking to pitch the speaker on the call", "Service providers and fund marketers working the room"]

export function SessionValue() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Why this room</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            A client isn&apos;t buying a list of consultants. It&apos;s buying certainty someone will own the result.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            On paper, distributed consulting sounds simple — find the right experts, gather them around a client&apos;s
            problem and skip the overhead of a large permanent firm. In reality, that&apos;s where the real business
            begins. In one focused session, Varun unpacks how independent specialists become one delivery team, how
            trust is built before the first project starts, and what gets harder as the network expands.
          </p>
        </Reveal>

        {/* Agenda */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
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
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </Reveal>
            )
          })}
        </div>

        {/* Who it's for / not for */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Who it&apos;s for</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-pretty leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90} className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Not for</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <span className="text-pretty leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
