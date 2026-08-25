import { TrendingUp, Users, Crosshair, Globe } from "lucide-react"
import { Reveal } from "../reveal"

const traits = [
  { icon: TrendingUp, label: "Founded", desc: "Built Konsälidön, a distributed consulting firm." },
  { icon: Crosshair, label: "Led", desc: "Senior consulting roles at PwC and Protiviti." },
  { icon: Users, label: "Aligns", desc: "Independent experts into one accountable team." },
  { icon: Globe, label: "Scales", desc: "Cross-border delivery across the GCC and beyond." },
]

const stats = [
  { value: "PwC · Protiviti", label: "Built consulting practices inside" },
  { value: "1 firm", label: "From hundreds of independent minds" },
  { value: "GCC", label: "Distributed delivery, one standard" },
]

export function Speaker() {
  return (
    <section id="speaker" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">The speaker</p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait quote card — enlarged and lowered so his head lands near the role tags; base fade dissolves the waist crop */}
          <Reveal className="relative self-start lg:mt-8 lg:-mx-14 lg:w-[calc(100%+7rem)]">
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
              Founder &amp; CEO · Konsälidön
            </p>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Varun spent years building consulting practices inside the big names — senior roles at{" "}
              <span className="text-foreground">PwC and Protiviti</span> — before deciding the model itself could be
              rebuilt. Instead of another firm carried by overhead and hierarchy, he set out to prove that a network of
              independent experts could deliver like one accountable company.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              That idea became Konsälidön: a distributed consulting firm where the right specialists are assembled
              around each client&apos;s problem, aligned into one delivery team, and held to a single standard of
              quality — without the weight of a large permanent organisation behind them.
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 text-pretty text-lg italic leading-relaxed text-foreground">
              &ldquo;A client isn&apos;t buying a group of consultants. They&apos;re buying the certainty that someone
              owns the outcome.&rdquo;
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
