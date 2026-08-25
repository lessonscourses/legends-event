import { TrendingUp, Users, Crosshair, Globe } from "lucide-react"
import { Reveal } from "./reveal"

const traits = [
  { icon: TrendingUp, label: "Built", desc: "Founded and scaled a distributed consulting firm from the ground up." },
  { icon: Users, label: "Led", desc: "Established and led Operations Consulting at PwC and Protiviti." },
  { icon: Crosshair, label: "Connects", desc: "Pairs organisations with senior independent experts." },
  { icon: Globe, label: "Expands", desc: "Growing from networks into ecosystems, communities and ventures." },
]

const stats = [
  { value: "~10 yrs", label: "Building & evolving Konsälidön" },
  { value: "3 firms", label: "Consulting practices built & led" },
  { value: "1 network", label: "Independent minds, one company" },
]

export function Speaker() {
  return (
    <section id="speaker" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">The speaker</p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait quote card — enlarged and lowered so his head lands near the role tags; base fade dissolves the waist crop */}
          <Reveal className="relative self-start lg:mt-24 lg:-mx-8 lg:w-[calc(100%+4rem)]">
            <img
              src="/images/julius-speaker-quote.webp"
              alt="Varun Malik — Founder and CEO of Konsälidön"
              className="w-full object-contain"
            />
            {/* Soft base gradient — only the very bottom, so it hides the waist crop without touching the baked-in quote initials */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background from-60% to-transparent" />
          </Reveal>

          {/* Bio */}
          <Reveal delay={120} className="flex flex-col justify-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Varun Malik</h2>
            <p className="mt-3 block text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Founder · CEO · Operator · Ecosystem Builder
            </p>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Varun Malik is the Founder and CEO of{" "}
              <span className="text-foreground">Konsälidön</span>, a Dubai-based distributed consulting company
              connecting organisations with consulting teams and independent senior talent. Before founding it, he
              established and led an Operations Consulting team at PwC, built a consulting practice at Protiviti and
              managed operations consulting projects at Encreate Consulting.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              He has also built technology and learning ventures in India. Nearly a decade on, his work is expanding
              from consulting networks towards a broader model built around ecosystems, communities and long-term
              collaboration.
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 text-pretty text-lg italic leading-relaxed text-foreground">
              &ldquo;What comes next will be built on new models — with wider reach, faster sensing, and closer to the
              people doing the work.&rdquo;
            </blockquote>

            {/* Traits */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {traits.map((t) => {
                const Icon = t.icon
                return (
                  <div key={t.label}>
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide">{t.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal className="mt-16 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-8 text-center">
              <p className="gold-text text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
