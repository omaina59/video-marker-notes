import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Video Marker Notes",
  description: "Take timestamped notes while watching YouTube videos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
