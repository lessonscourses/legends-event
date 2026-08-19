"use client"

import { useState } from "react"
import { SiteNav } from "./site-nav"
import { Hero } from "./hero"
import { SessionValue } from "./session-value"
import { EventAgenda } from "./event-agenda"
import { Speaker } from "./speaker"
import { ApplySection } from "./apply-section"
import { AboutLegends } from "./about-legends"
import { SiteFooter } from "./site-footer"
import { ApplyModal } from "./apply-modal"
import { PostEventRecap } from "./post-event-recap"

export function EventExperience() {
  const [postEvent, setPostEvent] = useState(false)

  return (
    <div className="min-h-dvh">
      <SiteNav postEvent={postEvent} onTogglePostEvent={() => setPostEvent((v) => !v)} />
      <main>
        <Hero postEvent={postEvent} />

        {postEvent ? (
          <PostEventRecap />
        ) : (
          <>
            <SessionValue />
            <EventAgenda />
          </>
        )}

        <Speaker />

        {!postEvent && <ApplySection />}

        <AboutLegends postEvent={postEvent} />
      </main>
      <SiteFooter />
      {!postEvent && <ApplyModal sendWhatsApp />}
    </div>
  )
}
