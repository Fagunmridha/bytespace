import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GridBackdrop } from "./grid-backdrop"

// Placeholder art — replace with the exported Figma 3D shapes (same paths).
const shapes = [
  { src: "/hero/spiral-lime.svg", w: 200, h: 260, className: "-top-8 -left-6 w-[170px] rotate-[70deg]" },
  { src: "/hero/squiggle-white.svg", w: 120, h: 130, className: "top-[33px] left-[209px] w-[112px]" },
  { src: "/hero/cone-white.svg", w: 130, h: 140, className: "top-[242px] -left-3 w-[115px] -scale-x-100" },
  { src: "/hero/torus-lime.svg", w: 240, h: 220, className: "top-[338px] left-[73px] w-[225px]" },
  { src: "/hero/cone-lime.svg", w: 130, h: 140, className: "top-[26px] right-[187px] w-[150px]" },
  { src: "/hero/cylinder-white.svg", w: 180, h: 300, className: "top-[53px] -right-2 w-[175px] rotate-12" },
  { src: "/hero/spring-lime.svg", w: 190, h: 250, className: "top-[331px] right-[74px] w-[190px]" },
]

export function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-800 py-20 text-white md:py-24">
      <GridBackdrop />

      <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] lg:block">
        {shapes.map((s) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            width={s.w}
            height={s.h}
            unoptimized
            className={`absolute h-auto ${s.className}`}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[960px] px-4 text-center md:px-6">
        <h2 className="mx-auto max-w-[620px] text-3xl leading-tight font-semibold tracking-tight md:text-[44px] md:leading-[1.2]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-8 text-base leading-7 font-light text-white/90 md:mt-12">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join?as=creator"
          className={cn(
            buttonVariants(),
            "mt-10 h-12 rounded-full bg-lime-500 px-6 text-base font-normal text-ink-950 hover:bg-lime-400"
          )}
        >
          Join as Creator
        </Link>
      </div>
    </section>
  )
}
