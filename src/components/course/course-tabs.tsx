import Image from "next/image"
import Link from "next/link"
import { CircleCheck } from "lucide-react"
import { ProgressCard } from "@/components/landing/floating-cards"
import type { CourseDetails } from "@/lib/course-details"
import { cn } from "@/lib/utils"
import { CourseReviews } from "./course-reviews"

const tabs = [
  { id: "about", label: "About" },
  { id: "lesson", label: "Lesson" },
  { id: "reviews", label: "Reviews" },
] as const

export type Tab = (typeof tabs)[number]["id"]

export const isTab = (v: unknown): v is Tab => tabs.some((t) => t.id === v)

export function CourseTabs({ course, active }: { course: CourseDetails; active: Tab }) {
  return (
    <div>
      <nav aria-label="Course information" className="flex gap-4">
        {tabs.map((t) => (
          <Link
            key={t.id}
            href={t.id === "about" ? `/courses/${course.slug}` : `/courses/${course.slug}?tab=${t.id}`}
            scroll={false}
            aria-current={active === t.id ? "page" : undefined}
            className={cn(
              "flex h-10 items-center rounded-full px-5 text-[15px] transition-colors",
              active === t.id ? "bg-lime-500 text-ink-950" : "bg-ink-50 text-ink-700 hover:bg-ink-100"
            )}
          >
            {t.label}
          </Link>
        ))}
      </nav>

      <div className="mt-9">
        {active === "about" && <About course={course} />}
        {active === "lesson" && <Lessons course={course} />}
        {active === "reviews" && <CourseReviews course={course} />}
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
      <h2 className="text-xl font-semibold text-ink-950">Explore the Modules</h2>
      <p className="mt-3 max-w-[690px] text-[15px] leading-7 text-ink-700">
        Immerse yourself in the course content as we break down each module into comprehensive
        lessons, providing practical insights and hands-on experiences.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-ink-950">Lesson List</h2>
      <ol className="mt-5 space-y-5">
        {course.modules.map((m) => (
          <li key={m.title} className="flex items-start gap-3">
            <Image src="/icons/module-video.png" alt="" width={72} height={72} className="size-[72px] shrink-0" />
            <div className="pt-1">
              <h3 className="font-sans text-[15px] font-medium text-ink-950">{m.title}</h3>
              <p className="max-w-[590px] text-[15px] leading-[26px] text-ink-700">{m.summary}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-6 text-xl font-semibold text-ink-950">Lesson Content</h2>
      <p className="mt-3 max-w-[690px] text-[15px] leading-7 text-ink-700">
        Engage with each lesson through captivating video content, detailed textual explanations, and
        interactive elements. Download resources, complete assignments, and test your understanding
        with quizzes.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-ink-950">Lesson Progress Tracking</h2>
      <p className="mt-3 max-w-[690px] text-[15px] leading-7 text-ink-700">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature
        guiding you through your learning journey.
      </p>
      <ProgressCard
        value={course.progress}
        className="mt-5 w-full border border-ink-200 shadow-none md:w-full md:px-4 md:py-3"
      />
    </>
  )
}
