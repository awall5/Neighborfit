import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeighborFit - Find Your Perfect Neighborhood Match",
  description:
    "Data-driven neighborhood matching based on your lifestyle preferences, budget, and priorities. Discover communities that truly fit your way of life.",
  keywords:
    "neighborhood matching, lifestyle preferences, community finder, housing decisions, data-driven recommendations",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
