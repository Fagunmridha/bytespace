import type { ReactNode } from "react"

export function AuthHeading({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-base text-brand-700">{eyebrow}</p>
      <h2 className="mt-1 text-3xl leading-tight font-semibold tracking-tight md:text-[44px] md:leading-[1.2]">
        {children}
      </h2>
    </div>
  )
}
