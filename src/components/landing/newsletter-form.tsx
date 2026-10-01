"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <p role="status" className="flex h-[52px] items-center text-sm font-medium text-ink-950">
        Thanks for subscribing! 🎉
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-3 sm:gap-6">
      <label className="flex-1 sm:max-w-[375px]">
        <span className="sr-only">Email address</span>
        <Input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="h-[52px] rounded-full border-ink-200 bg-white px-6 text-base text-ink-950 placeholder:text-ink-950 md:text-base"
        />
      </label>
      <Button
        type="submit"
        className="h-12 rounded-full bg-lime-500 px-6 text-base font-normal text-ink-950 hover:bg-lime-400"
      >
        Search
      </Button>
    </form>
  )
}
