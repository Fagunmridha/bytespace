import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  title: ReactNode
  description: string
  className?: string
  titleClassName?: string
}

export function SectionHeading({ title, description, className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-[920px] text-center", className)}>
      <h2
        className={cn(
          "text-3xl leading-tight font-semibold tracking-tight text-ink-950 md:text-[44px] md:leading-[1.2]",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 font-light text-ink-400 md:mt-6 md:text-base md:leading-7">
        {description}
      </p>
    </div>
  )
}
