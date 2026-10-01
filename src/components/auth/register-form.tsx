"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuthField } from "./auth-field"
import { AuthHeading } from "./auth-heading"

export function RegisterForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <AuthHeading eyebrow="Create an Account">
        Welcome to
        <br /> ByteSpace
      </AuthHeading>

      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5 md:mt-12">
        <AuthField id="name" name="name" label="Full Name" placeholder="Jamie Davis" autoComplete="name" required />
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
          autoComplete="new-password"
          minLength={8}
          required
        />
        <Button
          type="submit"
          className="mt-1 h-12 self-end rounded-full bg-lime-500 px-7 text-base font-normal text-ink-950 hover:bg-lime-400"
        >
          Continue
        </Button>
      </form>

      <p className="mt-12 text-center text-sm text-ink-700 lg:mt-auto">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-brand-700 hover:underline">
          Login
        </Link>
      </p>
    </>
  )
}
