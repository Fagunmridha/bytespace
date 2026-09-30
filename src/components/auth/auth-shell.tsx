import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { courses } from "@/lib/landing-data"
import { CourseCard } from "@/components/landing/course-card"
import { HappyStudentsCard } from "@/components/landing/floating-cards"
import { GridBackdrop } from "@/components/landing/grid-backdrop"

type AuthShellProps = {
  title: string
  description: string
  children: ReactNode
}

// Shared blue backdrop + marketing collage for the sign-in and register pages.
export function AuthShell({ title, description, children }: AuthShellProps) {
  const [digitalAsset, bigData] = [courses[1], courses[2]]

  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-brand-800 text-white">
      <GridBackdrop />

      <div className="mx-auto max-w-site px-4 py-8 md:px-6 xl:px-0">
        <Link href="/" aria-label="ByteSpace home" className="inline-block">
          <Image src="/brand/mark.png" alt="" width={29} height={32} priority />
        </Link>

        <div className="mt-8 grid items-start gap-12 lg:mt-[54px] lg:grid-cols-[485px_577px] lg:justify-between">
          <div className="lg:pt-3">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="mt-3 max-w-[480px] text-base leading-7 font-light text-white/90">{description}</p>

            {/* decorative collage */}
            <div inert className="relative mt-[70px] hidden h-[560px] w-[485px] lg:block">
              <CourseCard course={digitalAsset} className="absolute top-[89px] left-0 w-[372px]" />
              <CourseCard course={bigData} className="absolute top-0 left-[112px] w-[372px] shadow-xl" />
              {/* only a white torus was exported — tint it lime; multiply keeps its shading */}
              <div className="absolute top-[10px] left-[24px] isolate w-[164px]">
                <Image src="/shapes/torus-white.png" alt="" width={346} height={343} sizes="164px" />
                <span
                  className="absolute inset-0 bg-lime-500 mix-blend-multiply"
                  style={{ maskImage: "url(/shapes/torus-white.png)", maskSize: "100% 100%" }}
                />
              </div>
              <Image
                src="/shapes/squiggle-white.png"
                alt=""
                width={177}
                height={176}
                sizes="177px"
                className="absolute top-[318px] left-[345px] max-w-none"
              />
              <HappyStudentsCard tone="lime" className="absolute top-[433px] left-[225px]" />
              <Image
                src="/shapes/pyramid-lime.png"
                alt=""
                width={190}
                height={189}
                sizes="190px"
                className="absolute top-[395px] left-[-27px] max-w-none"
              />
            </div>
          </div>

          <div className="flex w-full flex-col rounded-3xl bg-white px-6 py-10 text-ink-950 sm:px-16 lg:min-h-[782px] lg:pt-[72px] lg:pb-14">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
