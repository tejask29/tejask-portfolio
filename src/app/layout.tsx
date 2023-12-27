
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: "Tejas' Portfolio",
  description: "Bridging the code gap from pixel to server, I craft immersive experiences like this."
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
