import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HappyStudentsCard, ProgressCard } from "./floating-cards"
import { GridBackdrop } from "./grid-backdrop"
import { Navbar } from "./navbar"

// Placeholder art — replace with the exported Figma assets (same paths).
const shapes = [
  { src: "/hero/spiral-lime.svg", w: 200, h: 260, className: "-left-2.5 top-[200px]" },
  { src: "/hero/squiggle-white.svg", w: 120, h: 130, className: "left-[215px] top-[390px]" },
  { src: "/hero/cylinder-lime.svg", w: 180, h: 300, className: "-right-2.5 top-[170px]" },
  { src: "/hero/cone-white.svg", w: 130, h: 140, className: "right-[180px] top-[370px]" },
  { src: "/hero/torus-white.svg", w: 240, h: 220, className: "left-[70px] top-[600px]" },
  { src: "/hero/spring-white.svg", w: 190, h: 250, className: "right-10 top-[580px]" },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-brand-800 text-white">
      <GridBackdrop />

      {/* floating 3D shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] lg:block">
        {shapes.map((s) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            width={s.w}
            height={s.h}
            unoptimized
            className={`absolute ${s.className}`}
          />
        ))}
      </div>

      <Navbar />

      {/* grows to fill the viewport; centres the copy in the spare height */}
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

      {/* visual */}
      <div className="relative mx-auto mt-6 h-[420px] w-full max-w-site shrink-0 md:mt-4 md:h-[450px]">
        <div
          aria-hidden
          className="absolute top-[70px] left-1/2 aspect-square w-[640px] -translate-x-1/2 rounded-full bg-lime-500 md:top-[60px] md:w-[1020px]"
        />
        {/* face sits at ~44% of the image width, so offset left to centre it */}
        <Image
          src="/hero/Image.png"
          alt="Smiling student with headphones holding a laptop"
          width={722}
          height={515}
          priority
          sizes="(min-width: 768px) 640px, 460px"
          className="absolute bottom-0 left-[calc(50%-204px)] w-[460px] max-w-none md:left-[calc(50%-284px)] md:w-[640px]"
        />

        {/* UI/UX Design */}
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
