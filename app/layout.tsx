import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Zapyon | Professional Website Builders",
  description: "We design, build, and ship professional websites for businesses. Creating stunning digital experiences that drive growth and engagement.",
  keywords: ["website design", "web development", "business websites", "professional websites", "Zapyon"],
  authors: [{ name: "Zapyon" }],
  openGraph: {
    title: "Zapyon | Professional Website Builders",
    description: "We design, build, and ship professional websites for businesses. Creating stunning digital experiences that drive growth and engagement.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
