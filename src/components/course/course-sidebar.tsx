import Image from "next/image"
import Link from "next/link"
import type { CourseDetails } from "@/lib/course-details"

const includes = [
  { icon: "/icons/resources.png", label: "Learning Resources" },
  { icon: "/icons/video.png", label: "Quality Lesson Videos" },
  { icon: "/icons/certificate.png", label: "Certificate of Completion" },
  { icon: "/icons/consultation.png", label: "Private Consultation" },
]

const pitch = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!"

export function CourseSidebar({ course }: { course: CourseDetails }) {
  return (
    <div className="rounded-[20px] border border-ink-200 bg-white px-6 pt-9 pb-10 text-ink-950 md:px-10">
      <h2 className="text-[19px] font-medium">
        {course.lessonCount} Lessons ({course.totalHours} hours)
      </h2>

      <ol className="mt-5 space-y-3 text-sm">
        {course.curriculum.map((l, i) => (
          <li key={l.title} className="grid grid-cols-[34px_1fr_auto] gap-x-2">
            <span>{String(i + 1).padStart(2, "0")}</span>
            <span className="max-w-[150px]">{l.title}</span>
            <span className="text-brand-700">{l.duration}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-ink-500">{course.moreVideos} more videos</p>

      <p className="mt-6 max-w-[250px] text-[13px] leading-[26px] text-ink-700">{pitch}</p>

      <p className="mt-4 text-xs text-ink-500">
        <span className="text-[36px] font-bold text-brand-700">${course.price}</span>/lifetime
      </p>

      <Link
        href={`/join?course=${course.slug}`}
        className="mt-4 flex h-11 w-full items-center justify-center rounded-full bg-lime-500 text-base font-medium text-ink-950 transition-colors hover:bg-lime-400"
      >
        Enroll Now
      </Link>

      <h3 className="mt-6 text-lg font-semibold">This course include</h3>
      <ul className="mt-4 space-y-3.5 text-base text-ink-700">
        {includes.map(({ icon, label }) => (
          <li key={label} className="flex items-center gap-2.5">
            <Image src={icon} alt="" width={24} height={24} className="size-5" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-ink-200 pt-6">
        <div className="flex items-center gap-3">
          <Image src="/avatars/purepearl.png" alt="" width={52} height={52} className="size-[52px] rounded-full" />
          <div>
            <p className="text-lg font-medium">PurePearl Studio</p>
            <p className="text-base text-ink-700">Professional Creator</p>
          </div>
        </div>
        <p className="mt-6 max-w-[250px] text-[13px] leading-[26px] text-ink-700">{pitch}</p>
        <Link
          href="/creators"
          className="mt-4 inline-flex h-[34px] items-center rounded-full border border-ink-300 px-5 text-[15px] transition-colors hover:bg-ink-50"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  )
}
