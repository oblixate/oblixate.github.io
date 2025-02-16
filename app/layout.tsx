import type React from "react"
import type { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberCode Hub",
  description: "Coding and Cybersecurity YouTube Channel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-gray-900 text-gray-100`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'