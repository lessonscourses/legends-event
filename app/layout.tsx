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
  title: "InvestHack #03 — Varun Malik · Legends",
  description:
    "How to Build One Business From Hundreds of Independent Minds. A private online session with Varun Malik — Founder & CEO of Konsälidön. By invitation only. Tuesday, 8 September · online.",
  openGraph: {
    title: "InvestHack #03 — Varun Malik · Legends",
    description:
      "How to Build One Business From Hundreds of Independent Minds. A private online session with Varun Malik. By invitation only.",
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
