import Image from "next/image"
import Link from "next/link"
import { categoryRows, courses } from "@/lib/landing-data"
import { CategoryChips } from "./category-chips"
import { CourseCard } from "./course-card"
import { SectionHeading } from "./section-heading"

const paths = [
  { label: "Design", slug: "design" },
  { label: "Development", slug: "development" },
  { label: "IT & Software", slug: "it-software" },
  { label: "Business", slug: "business" },
  { label: "Marketing", slug: "marketing" },
  { label: "Photography", slug: "photography" },
]

export function Discover() {
  return (
    <section id="courses" className="scroll-mt-4 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-site px-4 md:px-6 xl:px-0">
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-8 md:mt-10">
          <CategoryChips rows={categoryRows} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-10">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>

        <div id="learning-paths" className="scroll-mt-10" />
        <SectionHeading
          className="mt-20 md:mt-28"
          titleClassName="md:text-4xl"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-[72px] lg:grid-cols-6 lg:gap-10">
          {paths.map(({ label, slug }) => (
            <li key={slug}>
              <Link
                href={`/courses?category=${slug}`}
                className="flex aspect-square flex-col items-center justify-center rounded-[20px] border border-ink-200 bg-white transition hover:border-lime-500 hover:shadow-md"
              >
                <Image src={`/categories/${slug}.png`} alt="" width={60} height={60} className="size-15" />
                <span className="mt-4 text-base text-ink-800 md:text-lg">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
