"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function CategoryChips({ rows }: { rows: string[][] }) {
  const [active, setActive] = useState(rows[0][0])
  const last = rows.length - 1

  return (
    // Rows are `contents` on small screens so chips reflow freely, and
    // real centred lines from lg up to match the design's 8/6/4 split.
    <div
      role="tablist"
      aria-label="Course categories"
      className="mx-auto flex flex-wrap items-center justify-center gap-3 lg:flex-col lg:gap-5"
    >
      {rows.map((row, i) => (
        <div key={i} className="contents lg:flex lg:items-center lg:justify-center lg:gap-4">
          {row.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "h-9 rounded-full px-4 text-sm whitespace-nowrap transition-colors md:h-11 md:text-[15px]",
                active === c
                  ? "bg-lime-500 text-ink-950"
                  : "bg-ink-50 text-ink-700 hover:bg-ink-100"
              )}
            >
              {c}
            </button>
          ))}
          {i === last && (
            <Link
              href="/courses"
              className="px-1 text-sm text-brand-700 hover:underline md:text-[15px]"
            >
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
