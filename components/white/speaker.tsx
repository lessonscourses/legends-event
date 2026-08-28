import { TrendingUp, Users, Crosshair, Globe } from "lucide-react";
import { Reveal } from "../reveal";

const traits = [
  {
    icon: TrendingUp,
    label: "Built",
    desc: "Companies and consulting practices across several operating models.",
  },
  {
    icon: Users,
    label: "Led",
    desc: "Consulting practices and projects at PwC, Protiviti and Encreate.",
  },
  {
    icon: Crosshair,
    label: "Invests",
    desc: "In media, communities, experiences, training and practical tools.",
  },
  {
    icon: Globe,
    label: "Explores",
    desc: "Longevity, superintelligence, robotics and converging technologies.",
  },
];

const stats = [
  { value: "PwC · Protiviti", label: "Consulting practices built & led" },
  { value: "3 steps", label: "Understand · embrace · prepare" },
  { value: "1 MTP", label: "Powering humanity into an exponential future" },
];

export function Speaker() {
  return (
    <section id="speaker" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
          The speaker
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait quote card — enlarged and lowered so his head lands near the role tags; base fade dissolves the waist crop */}
          <Reveal className="relative self-start lg:mt-8 lg:-mx-14 lg:w-[calc(100%+7rem)]">
            <img
              src="/images/v-m-quote.png"
              alt="Varun Malik — entrepreneur, investor and Founder of Konsälidön"
              className="w-full object-contain"
            />
            {/* Soft base gradient — only the very bottom, so it hides the waist crop without touching the baked-in quote initials */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background from-60% to-transparent" />
          </Reveal>

          {/* Bio */}
          <Reveal delay={120} className="flex flex-col justify-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Varun Malik
            </h2>
            <p className="mt-3 block text-sm font-medium uppercase tracking-[0.22em] text-primary">
              Entrepreneur · Investor · Founder of Konsälidön
            </p>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Varun is an entrepreneur, investor and the Founder of{" "}
              <span className="text-foreground">Konsälidön</span>. He has built
              and led consulting practices at PwC, Protiviti and Encreate
              Consulting, created technology and learning ventures, and spent
              years developing businesses across different operating models.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              After stepping back from day-to-day operational roles, his focus
              shifted towards understanding, preparing for and investing in an
              exponential future. That thesis now guides micro-investments
              designed to help leaders understand what is coming, move beyond
              fear and prepare to act.
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 text-pretty text-lg italic leading-relaxed text-foreground">
              &ldquo;Powering humanity into an exponential future.&rdquo;
            </blockquote>

            {/* Traits */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {traits.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.label}>
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide">
                      {t.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal className="mt-16 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-8 text-center">
              <p className="gold-text text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
