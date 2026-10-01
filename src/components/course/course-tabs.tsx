"use client"

import { useState } from "react"
import Image from "next/image"
import { CircleCheck, Star } from "lucide-react"
import type { CourseDetails } from "@/lib/course-details"
import { cn } from "@/lib/utils"

const tabs = ["About", "Lessons", "Reviews"] as const
type Tab = (typeof tabs)[number]

export function CourseTabs({ course }: { course: CourseDetails }) {
  const [active, setActive] = useState<Tab>("About")

  return (
    <div>
      <div role="tablist" aria-label="Course information" className="flex gap-4">
        {tabs.map((t) => (
          <button
            key={t}
            id={`tab-${t}`}
            type="button"
            role="tab"
            aria-selected={active === t}
            aria-controls={`panel-${t}`}
            onClick={() => setActive(t)}
            className={cn(
              "h-10 rounded-full px-5 text-[15px] transition-colors",
              active === t ? "bg-lime-500 text-ink-950" : "bg-ink-50 text-ink-700 hover:bg-ink-100"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="mt-9">
        {active === "About" && <About course={course} />}
        {active === "Lessons" && <Lessons course={course} />}
        {active === "Reviews" && <Reviews course={course} />}
      </div>
    </div>
  )
}

function About({ course }: { course: CourseDetails }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-ink-950">Description</h2>
      <div className="mt-3 space-y-6 text-[15px] leading-7 text-ink-700">
        {course.description.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>

      <h2 className="mt-6 text-xl font-semibold text-ink-950">Sneak Peak</h2>
      <ul className="mt-6 grid grid-cols-2 gap-[18px] sm:grid-cols-4">
        {course.sneakPeek.map((img) => (
          <li key={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              width={167}
              height={125}
              className="aspect-[167/125] w-full rounded-xl object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className="mt-5 text-xl font-semibold text-ink-950">Key Points</h2>
      <ul className="mt-4 space-y-3.5 text-base text-ink-700">
        {course.keyPoints.map((k) => (
          <li key={k} className="flex items-center gap-2.5">
            <CircleCheck aria-hidden className="size-5 shrink-0 fill-brand-700 text-white" />
            {k}
          </li>
        ))}
      </ul>
    </>
  )
}

function Lessons({ course }: { course: CourseDetails }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-ink-950">
        {course.lessonCount} Lessons ({course.totalHours} hours)
      </h2>
      <ol className="mt-4 divide-y divide-ink-100 text-sm">
        {course.curriculum.map((l, i) => (
          <li key={l.title} className="flex items-center gap-4 py-4">
            <span className="text-ink-500">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 text-ink-950">{l.title}</span>
            <span className="text-brand-700">{l.duration}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-sm text-ink-500">
        {course.moreVideos} more videos
      </p>
    </>
  )
}

function Reviews({ course }: { course: CourseDetails }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-ink-950">Reviews</h2>
      <p className="mt-4 flex items-center gap-2 text-sm text-ink-700">
        <Star aria-hidden className="size-5 fill-brand-700 text-brand-700" />
        <span className="text-2xl font-semibold text-ink-950">{course.rating}</span>
        out of 5 · {course.reviews} reviews
      </p>
    </>
  )
}
