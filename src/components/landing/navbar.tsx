"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex h-20 max-w-site items-center justify-between px-4 md:h-24 md:px-6 xl:px-0">
        <Logo />

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm text-white/85 transition-colors hover:text-white",
                    active && "font-medium text-white"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-5">
          <Link
            href="/sign-in"
            className="hidden text-sm text-white/85 hover:text-white md:inline"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="hidden text-sm text-white/85 hover:text-white md:inline"
          >
            Join Us
          </Link>
          <Link href="/cart" aria-label="Cart" className="text-white">
            <Image src="/icons/bag.png" alt="" width={24} height={24} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="text-white md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-full rounded-2xl bg-white p-4 shadow-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {[...links, { href: "/sign-in", label: "Sign In" }, { href: "/join", label: "Join Us" }].map(
              (l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-ink-950 hover:bg-ink-50"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  )
}
