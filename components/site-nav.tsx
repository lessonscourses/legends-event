"use client"

import { CalendarCheck, CalendarClock } from "lucide-react"
import { LegendsLogo } from "./legends-logo"
import { ApplyButton } from "./apply-button"

export function SiteNav({
  postEvent = false,
  onTogglePostEvent,
}: {
  postEvent?: boolean
  onTogglePostEvent?: () => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-transparent bg-background/70 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <LegendsLogo className="h-8" />
        <div className="flex items-center gap-3">
          {/* Demo toggle — switches the page between pre-event and post-event states */}
          <button
            type="button"
            onClick={onTogglePostEvent}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {postEvent ? (
              <>
                <CalendarClock className="h-4 w-4" />
                Pre-event view
              </>
            ) : (
              <>
                <CalendarCheck className="h-4 w-4" />
                Post-event view
              </>
            )}
          </button>

          {!postEvent && (
            <ApplyButton className="rounded-full gold-fill px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Apply to Join
            </ApplyButton>
          )}
        </div>
      </nav>
    </header>
  )
}
