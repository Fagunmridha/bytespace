"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function FollowButton() {
  const [following, setFollowing] = useState(false)

  return (
    <button
      type="button"
      aria-pressed={following}
      onClick={() => setFollowing((f) => !f)}
      className={cn(
        "h-11 shrink-0 rounded-full px-6 text-base transition-colors md:text-lg",
        following
          ? "bg-white text-ink-950 hover:bg-ink-50"
          : "bg-lime-500 text-ink-950 hover:bg-lime-400"
      )}
    >
      {following ? "Following" : "Follow"}
    </button>
  )
}
