import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/sonner"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "MAISON | Luxury Essentials",
  description: "Timeless elegance, modern refinement. Discover our curated collection of luxury essentials.",
  icons: {
    icon: [
      {
        url: "/maison-store/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/maison-store/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/maison-store/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/maison-store/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`font-sans antialiased`}>
        <CartProvider><SmoothScrollProvider>{children}</SmoothScrollProvider><Toaster position="top-right" /></CartProvider>
        
      </body>
    </html>
  )
}
