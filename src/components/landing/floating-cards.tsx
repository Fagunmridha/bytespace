import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProgressCard({ value = 55, className }: { value?: number; className?: string }) {
  return (
    <div
      className={cn(
        "w-[170px] rounded-xl bg-white p-3 text-left text-ink-950 shadow-lg md:w-[220px] md:p-4",
        className
      )}
    >
      <p className="text-xs md:text-sm">Learning Progress</p>
      <p className="mt-1 text-3xl font-semibold md:mt-2 md:text-[40px] md:leading-tight">{value}%</p>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
        className="mt-2 h-2 overflow-hidden rounded-full bg-ink-50"
      >
        <div className="h-full rounded-full bg-lime-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

type HappyStudentsCardProps = { tone?: "white" | "lime"; className?: string }

export function HappyStudentsCard({ tone = "white", className }: HappyStudentsCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-3 text-left text-ink-950 shadow-lg md:p-4",
        tone === "lime" ? "bg-lime-500" : "bg-white",
        className
      )}
    >
      <p className="text-sm font-medium md:text-base">Happy Students</p>
      <p className="flex items-center gap-1 text-xs text-ink-500">
        4.5 <span className="text-ink-400">(240)</span>
        <Star
          className={cn(
            "size-3.5",
            tone === "lime" ? "fill-brand-700 text-brand-700" : "fill-lime-500 text-lime-500"
          )}
        />
      </p>
      <Image
        src="/avatars/happy-students.png"
        alt="2K+ happy students"
        width={232}
        height={43}
        className="mt-2 h-auto w-[190px] md:w-[232px]"
      />
    </div>
  )
}
