"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function ShareButton({ title, className }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {})
      return
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={share}
      className={cn(
        "flex h-10 shrink-0 items-center gap-2 rounded-full bg-lime-500 px-5 text-[15px] text-ink-950 transition-colors hover:bg-lime-400",
        className
      )}
    >
      <Share2 aria-hidden className="size-5" />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  )
}
