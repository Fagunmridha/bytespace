import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import type { Creator } from "@/lib/creators"
import { FollowButton } from "./follow-button"

export function CreatorHero({ creator }: { creator: Creator }) {
  const stats = [
    { value: creator.products, label: "Products" },
    { value: creator.followers, label: "Followers" },
  ]

  return (
    <section className="relative isolate bg-brand-800 pb-12 text-white md:pb-[88px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.12)_1px,transparent_1px)] bg-size-[240px_240px] bg-position-[calc(50%+120px)_118px]"
      />

      <Navbar />

      <div className="mx-auto max-w-site px-4 pt-8 md:px-6 md:pt-[77px] xl:px-0">
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src={creator.avatar}
            alt=""
            width={96}
            height={96}
            priority
            className="size-20 shrink-0 rounded-2xl md:size-24"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">{creator.name}</h1>
              <span className="flex h-[35px] items-center rounded-full bg-lime-500 px-6 text-base text-ink-950">
                Creator
              </span>
            </div>
            <p className="mt-2 text-base md:text-lg">{creator.tagline}</p>
          </div>
        </div>

        <div className="mt-9 text-base leading-7 md:text-lg">
          {creator.bio.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex gap-3 md:gap-4">
            {stats.map((s) => (
              <li
                key={s.label}
                className="flex h-11 items-center gap-2 rounded-full bg-white px-6 text-base text-ink-950 md:text-lg"
              >
                <span className="text-brand-700">{s.value}</span>
                {s.label}
              </li>
            ))}
          </ul>
          <FollowButton />
        </div>
      </div>
    </section>
  )
}
