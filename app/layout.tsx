import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "How to Profit as a Human in an Unforgiving AI World · Legends",
  description:
    "How to Profit as a Human in an Unforgiving AI World. A private online session with entrepreneur and investor Varun Malik. By invitation only. Tuesday, 8 September · online.",
  openGraph: {
    title: "How to Profit as a Human in an Unforgiving AI World · Legends InvestHack #03",
    description:
      "Where humans can still create value in the age of AI — and what investors should back next. A private online session with Varun Malik.",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
