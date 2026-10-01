import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FloatingShapes, type Shape } from "./floating-shapes"
import { GridBackdrop } from "./grid-backdrop"

const shapes: Shape[] = [
  { src: "/shapes/spiral-lime-corner.png", width: 267, height: 225, className: "top-0 left-0", edge: true },
  { src: "/shapes/squiggle-white-cta.png", width: 177, height: 176, className: "top-[4px] left-[177px]" },
  { src: "/shapes/cone-white.png", width: 140, height: 189, className: "top-[225px] left-0", edge: true },
  { src: "/shapes/torus-lime-half.png", width: 346, height: 190, className: "bottom-0 left-[20px]" },
  { src: "/shapes/pyramid-lime.png", width: 190, height: 189, className: "top-[5px] right-[174px]" },
  { src: "/shapes/cylinder-white.png", width: 218, height: 372, className: "top-[18px] right-0", edge: true },
  { src: "/shapes/spring-lime.png", width: 334, height: 199, className: "right-0 bottom-0" },
]

export function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-800 py-20 text-white md:py-24">
      <GridBackdrop />

      <FloatingShapes shapes={shapes} />

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
