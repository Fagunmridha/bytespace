"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuthField } from "./auth-field"
import { AuthHeading } from "./auth-heading"
import { FacebookIcon, GoogleIcon } from "./social-icons"

const providers = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Google", icon: GoogleIcon },
]

export function SignInForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <AuthHeading eyebrow="Sign In">Welcome Back</AuthHeading>

      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5 md:mt-12">
        <AuthField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          autoComplete="email"
          required
        />
        <AuthField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          autoComplete="current-password"
          required
        />
        <Button
          type="submit"
          className="mt-1 h-12 self-end rounded-full bg-lime-500 px-6 text-base font-normal text-ink-950 hover:bg-lime-400"
        >
          Sign In
        </Button>
      </form>

      <div className="mt-14 flex items-center gap-4 text-sm text-ink-400 md:mt-20">
        <span className="h-px flex-1 bg-ink-200" />
        or
        <span className="h-px flex-1 bg-ink-200" />
      </div>

      <div className="mt-10 flex justify-center gap-4 md:mt-14">
        {providers.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Sign in with ${name}`}
            className="grid size-[70px] place-items-center rounded-2xl border border-ink-200 bg-white text-ink-950 transition-colors hover:bg-ink-50"
          >
            <Icon className="size-8" />
          </button>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-ink-700 lg:mt-auto lg:pt-14">
        New user?{" "}
        <Link href="/join" className="text-brand-700 hover:underline">
          Create an account
        </Link>
      </p>
    </>
  )
}
