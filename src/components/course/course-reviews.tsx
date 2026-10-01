"use client"

import { useState } from "react"
import Image from "next/image"
import type { CourseDetails } from "@/lib/course-details"
import { cn } from "@/lib/utils"

const filters = [0, 5, 4, 3, 2, 1]

function Stars({ count, className }: { count: number; className: string }) {
  return (
    <span role="img" aria-label={`${count} out of 5 stars`} className="flex gap-[3px]">
      {Array.from({ length: count }, (_, i) => (
        <Image key={i} src="/icons/star-filled.png" alt="" width={24} height={24} className={className} />
      ))}
    </span>
  )
}

export function CourseReviews({ course }: { course: CourseDetails }) {
  const [rating, setRating] = useState(0)
  const { average, breakdown } = course.ratingSummary
  const reviews = rating ? course.reviewList.filter((r) => r.rating === rating) : course.reviewList

  return (
    <>
      <h2 className="text-xl font-semibold text-ink-950">What Learners Are Saying</h2>
      <p className="mt-3 max-w-[690px] text-[15px] leading-7 text-ink-700">
        Discover what our learners have to say about their experience with ‘Build Digital Assets: A
        Comprehensive Guide.’ Read reviews and ratings from individuals who have embarked on the
        transformative journey of mastering digital asset creation.
      </p>

      <div className="mt-6 flex flex-col gap-6 rounded-[20px] border border-ink-200 p-6 sm:flex-row sm:items-center sm:gap-[25px] md:px-10 md:py-10">
        <div className="flex h-[138px] w-full shrink-0 flex-col items-center justify-center rounded-md bg-lime-500 text-ink-950 sm:w-32">
          <span className="text-[13px]">Ratings</span>
          <span className="font-heading text-[36px] leading-tight font-semibold">{average}</span>
        </div>

        <ul className="flex-1 space-y-[10px]">
          {breakdown.map((row, i) => (
            <li key={i} className="flex items-center gap-[18px]">
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
                <span className="block h-full rounded-full bg-lime-500" style={{ width: `${row.share}%` }} />
              </span>
              <Stars count={5} className="size-5" />
              <span className="w-8 text-right text-sm text-ink-700">{row.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="mt-6 text-xl font-semibold text-ink-950">Individual Reviews:</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={rating === f}
            onClick={() => setRating(f)}
            className={cn(
              "flex h-11 items-center gap-1.5 rounded-full px-5 text-[15px] transition-colors",
              rating === f ? "bg-lime-500 text-ink-950" : "bg-ink-50 text-ink-700 hover:bg-ink-100"
            )}
          >
            {f === 0 ? (
              "All rating"
            ) : (
              <>
                <Image src="/icons/star-filled.png" alt="" width={24} height={24} className="size-5" />
                <span className="sr-only">Rating </span>
                {f}
              </>
            )}
          </button>
        ))}
      </div>

      {reviews.length > 0 ? (
        <ul className="mt-8 space-y-[26px]">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-[20px] border border-ink-200 px-6 pt-9 pb-10 md:px-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image src={r.avatar} alt="" width={52} height={52} className="size-[52px] rounded-full" />
                  <div>
                    <p className="text-base font-medium text-ink-950">{r.name}</p>
                    <p className="text-sm text-ink-500">{r.role}</p>
                  </div>
                </div>
                <p className="shrink-0 pt-1 text-sm text-ink-500">{r.date}</p>
              </div>
              <div className="mt-5">
                <Stars count={r.rating} className="size-6" />
              </div>
              <p className="mt-5 text-base leading-[26px] text-ink-700">{r.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-[15px] text-ink-500">No {rating}-star reviews yet.</p>
      )}
    </>
  )
}
