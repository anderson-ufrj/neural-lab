import * as React from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
// import { ChatWidget } from "../chat/chat-widget"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  )
}