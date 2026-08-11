import "./white.css"
import { SiteNav } from "@/components/white/site-nav"
import { Hero } from "@/components/white/hero"
import { SessionValue } from "@/components/white/session-value"
import { EventAgenda } from "@/components/white/event-agenda"
import { Speaker } from "@/components/white/speaker"
import { ApplySection } from "@/components/white/apply-section"
import { AboutLegends } from "@/components/white/about-legends"
import { SiteFooter } from "@/components/white/site-footer"
import { ApplyModal } from "@/components/apply-modal"

export default function WhitePage() {
  return (
    <div className="legends-white min-h-dvh">
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
