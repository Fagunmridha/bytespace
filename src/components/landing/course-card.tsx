import Image from "next/image"
import Link from "next/link"
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react"
import type { Course } from "@/lib/landing-data"
import { cn } from "@/lib/utils"

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  return (
    <article
      className={cn(
        "group relative min-w-0 rounded-[20px] border border-ink-200 bg-white p-4 pb-5 transition-shadow hover:shadow-lg",
        className
      )}
    >
      {/* the exported image already includes the lessons / duration / comments pills */}
      <div className="relative aspect-[341/196] overflow-hidden rounded-xl bg-ink-100">
        <Image
          src={course.image}
          alt={`${course.lessons} lessons, ${course.duration}, ${course.comments} comments`}
          fill
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate text-xl font-semibold text-ink-950">
          <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0">
            {course.title}
          </Link>
        </h3>
        <p className="flex shrink-0 items-center gap-1 text-base text-ink-500">
          {course.rating}
          <Star aria-label="stars" className="size-4 fill-ink-300 text-ink-300" />
        </p>
      </div>
      <p className="text-xs text-ink-500">
        by <span className="text-brand-700">{course.author}</span>
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-8 items-center gap-1.5 rounded-full bg-ink-50 px-3 text-xs text-ink-700">
          <ChartNoAxesColumnIncreasing aria-hidden className="size-4" />
          {course.level}
        </span>
        <Image
          src="/avatars/learners.png"
          alt={`${course.enrolled} learners enrolled`}
          width={128}
          height={32}
          className="h-8 w-auto"
        />
      </div>

      <p className="mt-4 text-xs text-ink-500">
        <span className="text-xl font-bold text-brand-700">${course.price}</span>/lifetime
      </p>
    </article>
  )
}
