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

            {/* collage — placeholder 3D shapes until the Figma exports are added */}
            <div inert className="relative mt-[70px] hidden h-[560px] w-[485px] lg:block">
              <CourseCard course={digitalAsset} className="absolute top-[89px] left-0 w-[372px]" />
              <CourseCard course={bigData} className="absolute top-0 left-[112px] w-[372px] shadow-xl" />
              <Image
                src="/hero/torus-lime.svg"
                alt=""
                width={240}
                height={220}
                unoptimized
                className="absolute top-[39px] left-[49px] w-[113px] rotate-12"
              />
              <Image
                src="/hero/squiggle-white.svg"
                alt=""
                width={120}
                height={130}
                unoptimized
                className="absolute top-[347px] left-[377px] w-[118px]"
              />
              <HappyStudentsCard tone="lime" className="absolute top-[433px] left-[225px]" />
              <Image
                src="/hero/cone-lime.svg"
                alt=""
                width={130}
                height={140}
                unoptimized
                className="absolute top-[416px] left-0 w-[126px] -scale-x-100"
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
