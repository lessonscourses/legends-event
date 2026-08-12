"use client"

import { useEffect, useState } from "react"
import { LegendsLogo } from "./legends-logo"
import { ApplyButton } from "../apply-button"

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border/60 bg-background/70 backdrop-blur-md"
          : "border-transparent bg-black"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Before scroll the nav sits on the black hero → white logo; after scroll it turns light → dark logo */}
        <LegendsLogo className="h-8" variant={scrolled ? "dark" : "light"} />
        <div className="flex items-center gap-6">
          <ApplyButton className="rounded-full gold-fill px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Apply to Join
          </ApplyButton>
        </div>
      </nav>
    </header>
  )
}
