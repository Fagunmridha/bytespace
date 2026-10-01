import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HappyStudentsCard, ProgressCard } from "./floating-cards"
import { FloatingShapes, type Shape } from "./floating-shapes"
import { GridBackdrop } from "./grid-backdrop"
import { Navbar } from "./navbar"

const shapes: Shape[] = [
  { src: "/shapes/spiral-lime-left.png", width: 267, height: 387, className: "top-[136px] left-0", edge: true },
  { src: "/shapes/squiggle-white.png", width: 177, height: 176, className: "top-[361px] left-[185px]" },
  { src: "/shapes/cylinder-lime.png", width: 213, height: 372, className: "top-[135px] right-0", edge: true },
  { src: "/shapes/pyramid-white.png", width: 190, height: 189, className: "top-[348px] right-[146px]" },
  { src: "/shapes/torus-white.png", width: 346, height: 343, className: "top-[540px] left-[19px]" },
  { src: "/shapes/spring-white.png", width: 317, height: 332, className: "top-[542px] right-0" },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-brand-800 text-white">
      <GridBackdrop />

      <FloatingShapes shapes={shapes} />

      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-site flex-1 flex-col justify-center px-4 pt-8 text-center md:px-6 md:pt-4">
        <h1 className="mx-auto max-w-[920px] text-[40px] leading-[1.15] font-semibold tracking-tight md:text-6xl md:leading-[1.15]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[900px] text-base font-light text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range
          of courses.
        </p>

        <form
          action="/courses"
          role="search"
          className="mx-auto mt-10 flex w-full max-w-[580px] items-center gap-3 md:mt-10 md:gap-4"
        >
          <label className="relative flex-1">
            <span className="sr-only">Search courses</span>
            <Search className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-ink-500" />
            <Input
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="h-13 rounded-full border-0 bg-white pl-12 text-base text-ink-950 placeholder:text-ink-400 md:text-base"
            />
          </label>
          <Button
            type="submit"
            className="h-12 rounded-full bg-lime-500 px-6 text-base font-medium text-ink-950 hover:bg-lime-400"
          >
            Search
          </Button>
        </form>
      </div>

      <div className="relative mx-auto mt-6 h-[420px] w-full max-w-site shrink-0 md:mt-4 md:h-[450px]">
        <div
          aria-hidden
          className="absolute top-[70px] left-1/2 aspect-square w-[640px] -translate-x-1/2 rounded-full bg-lime-500 md:top-[60px] md:w-[1020px]"
        />
        <Image
          src="/hero/Image.png"
          alt="Smiling student with headphones holding a laptop"
          width={722}
          height={515}
          priority
          sizes="(min-width: 768px) 640px, 460px"
          className="absolute bottom-0 left-[calc(50%-204px)] w-[460px] max-w-none md:left-[calc(50%-284px)] md:w-[640px]"
        />

        <div className="absolute top-[90px] left-4 rounded-xl bg-white px-4 py-3 text-left text-ink-950 shadow-lg md:top-[100px] md:left-[calc(50%-300px)]">
          <p className="text-sm font-medium md:text-base">UI/UX Design</p>
          <p className="mt-0.5 flex items-center gap-2 text-[11px] text-ink-400 md:text-xs">
            200 Courses <span className="size-1 rounded-full bg-ink-400" /> 1000+ Students
          </p>
        </div>

        <ProgressCard className="absolute top-[160px] right-4 md:top-[110px] md:right-auto md:left-[calc(50%+110px)]" />
        <HappyStudentsCard className="absolute bottom-6 left-4 md:top-[270px] md:bottom-auto md:left-[calc(50%-370px)]" />
      </div>
    </section>
  )
}
