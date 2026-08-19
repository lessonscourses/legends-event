import { Play, Camera, Sparkles, Quote } from "lucide-react"
import { Reveal } from "./reveal"

/**
 * POST-EVENT RECAP
 * Replaces SessionValue + EventAgenda once the event is over.
 *
 * MEDIA PLACEHOLDERS — swap these for the real assets later:
 *  - Featured video: set RECAP_VIDEO_URL below to a YouTube/Vimeo embed URL
 *    (or swap the poster tile for a real video tag).
 *  - Photos: replace the photos[].src values with the real event photos.
 *  - Copy: replace the placeholder article text below with the real write-up.
 */

// TODO: put the real recording embed URL here (YouTube/Vimeo) or an mp4 file.
const RECAP_VIDEO_URL = "" // e.g. "https://www.youtube.com/embed/XXXXXXXX"

const photos = [
  { src: "/images/recap-photo-1.png", alt: "Founders in conversation during the session" },
  { src: "/images/recap-photo-2.png", alt: "Attendees taking notes during the live webinar" },
]

const highlights = [
  "200+ scale-up lessons distilled into one candid hour",
  "A closed-room Q&A with Julius, cameras on",
  "New intros made across the GCC founder network",
]

export function PostEventRecap() {
  return (
    <section id="recap" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">The session, in review</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            What happened in the room
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {/* PLACEHOLDER COPY — replace with the real recap */}
            A full room, cameras on, and an hour of unusually direct conversation. Julius walked us through what really
            changes when a founder becomes the bottleneck — and the small, human plays that keep a company&apos;s energy
            up as it scales. Below: the recording, a few moments from the session, and the takeaways people kept quoting
            afterwards.
          </p>
        </Reveal>

        {/* Bento gallery */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* VIDEO — featured tile, spans two columns */}
          <Reveal className="lg:col-span-2">
            <figure className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
              {RECAP_VIDEO_URL ? (
                <iframe
                  src={RECAP_VIDEO_URL}
                  title="Session recording"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <>
                  <img
                    src="/images/recap-video-poster.png"
                    alt="Still from the session recording"
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  {/* Decorative play badge — wire up once RECAP_VIDEO_URL is set */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full gold-fill text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
                      <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <figcaption className="absolute bottom-4 left-5 text-sm font-medium text-foreground">
                    Full recording · coming soon
                  </figcaption>
                </>
              )}
            </figure>
          </Reveal>

          {/* Article / takeaways card */}
          <Reveal delay={90} className="flex flex-col rounded-2xl border border-border bg-card p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-lg font-semibold">Highlights</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Two photos */}
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={p.src || "/placeholder.svg"}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary backdrop-blur-sm">
                  <Camera className="h-4 w-4" />
                </span>
              </figure>
            </Reveal>
          ))}

          {/* Pull quote card */}
          <Reveal delay={180} className="flex flex-col justify-center rounded-2xl border border-primary/25 bg-primary/[0.05] p-7">
            <Quote className="h-6 w-6 text-primary" />
            <blockquote className="mt-4 text-pretty text-lg italic leading-relaxed text-foreground">
              {/* PLACEHOLDER QUOTE */}
              &ldquo;The highest-leverage decisions are the ones you cannot delegate.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Julius Bachmann
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
