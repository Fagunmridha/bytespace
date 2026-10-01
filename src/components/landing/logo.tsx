import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = { variant?: "light" | "dark"; className?: string }

export function Logo({ variant = "light", className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src={variant === "dark" ? "/brand/logo-dark.png" : "/brand/logo.png"}
        alt="ByteSpace"
        width={171}
        height={37}
        priority={variant === "light"}
        className="h-7 w-auto md:h-[37px]"
      />
    </Link>
  )
}
