import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CourseHero } from "@/components/course/course-hero"
import { CourseSidebar } from "@/components/course/course-sidebar"
import { CourseTabs } from "@/components/course/course-tabs"
import { Footer } from "@/components/landing/footer"
import { getCourseDetails } from "@/lib/course-details"
import { courses } from "@/lib/landing-data"

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourseDetails((await params).slug)
  return course ? { title: `${course.headline} — ByteSpace`, description: course.subtitle } : {}
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const course = getCourseDetails((await params).slug)
  if (!course) notFound()

  return (
    <>
      <main className="flex-1">
        <CourseHero course={course} />

        <div className="mx-auto grid max-w-site gap-10 px-4 pt-8 pb-14 md:px-6 xl:grid-cols-[720px_410px] xl:justify-between xl:gap-0 xl:pt-0 xl:px-0">
          <aside className="relative xl:col-start-2 xl:row-start-1 xl:-mt-[549px] xl:self-start">
            <CourseSidebar course={course} />
          </aside>
          <div className="xl:col-start-1 xl:row-start-1 xl:pt-16">
            <CourseTabs course={course} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
