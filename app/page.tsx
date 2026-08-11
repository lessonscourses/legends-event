import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { SessionValue } from "@/components/session-value"
import { EventAgenda } from "@/components/event-agenda"
import { Speaker } from "@/components/speaker"
import { ApplySection } from "@/components/apply-section"
import { AboutLegends } from "@/components/about-legends"
import { SiteFooter } from "@/components/site-footer"
import { ApplyModal } from "@/components/apply-modal"

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <Hero />
        <SessionValue />
        <EventAgenda />
        <Speaker />
        <ApplySection />
        <AboutLegends />
      </main>
      <SiteFooter />
      <ApplyModal />
    </div>
  )
}
