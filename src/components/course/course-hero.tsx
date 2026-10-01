import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import type { CourseDetails } from "@/lib/course-details"
import { ShareButton } from "./share-button"

export function CourseHero({ course }: { course: CourseDetails }) {
  const badges = [
    { icon: "/icons/level-blue.png", label: course.level },
    { icon: "/icons/star.png", label: `${course.rating} (${course.reviews} reviews)` },
    { icon: "/icons/students.png", label: `${course.students} Students` },
  ]

  return (
    <section className="relative isolate bg-brand-800 pb-12 text-white xl:pb-[70px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.12)_1px,transparent_1px)] bg-size-[240px_240px] bg-position-[calc(50%+120px)_118px]"
      />

      <Navbar />

      <div className="mx-auto max-w-site px-4 pt-8 md:px-6 lg:pt-[75px] xl:px-0">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl leading-tight font-semibold tracking-tight md:text-4xl md:leading-[44px]">
              {course.headline}
            </h1>
            <p className="mt-1.5 font-heading text-base font-semibold md:text-xl">{course.subtitle}</p>
          </div>
          <ShareButton title={course.headline} className="min-[1440px]:-mr-[83px]" />
        </div>

        <p className="mt-6 text-base md:text-lg">
          by <span className="text-lime-500">{course.author}</span>
        </p>

        <ul className="mt-[26px] flex flex-wrap gap-3 md:gap-4">
          {badges.map((b) => (
            <li
              key={b.icon}
              className="flex h-10 items-center gap-2 rounded-full bg-white px-5 text-[15px] text-ink-950"
            >
              <Image src={b.icon} alt="" width={24} height={24} className="size-5" />
              {b.label}
            </li>
          ))}
        </ul>

        <div className="mt-10 overflow-hidden rounded-[20px] lg:mt-[60px] xl:w-[720px]">
          <Image
            src="/course/preview.png"
            alt={`Preview video for ${course.headline}`}
            width={720}
            height={479}
            priority
            sizes="(min-width: 1280px) 720px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
