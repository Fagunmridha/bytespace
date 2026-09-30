import type { ComponentProps } from "react"
import { Input } from "@/components/ui/input"

type AuthFieldProps = { label: string } & ComponentProps<"input">

export function AuthField({ label, id, ...props }: AuthFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-ink-950">
        {label}
      </label>
      <Input
        id={id}
        className="mt-2 h-[52px] rounded-xl border-ink-200 bg-white px-6 text-base text-ink-950 placeholder:text-ink-400 md:text-base"
        {...props}
      />
    </div>
  )
}
