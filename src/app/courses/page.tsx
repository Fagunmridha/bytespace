import type { Metadata } from "next"
import { FilterBar, slugify } from "@/components/courses/filter-bar"
import { Pagination } from "@/components/courses/pagination"
import { SearchHeader } from "@/components/courses/search-header"
import { CourseCard } from "@/components/landing/course-card"
import { Footer } from "@/components/landing/footer"
import { categoryRows, courses } from "@/lib/landing-data"

export const metadata: Metadata = {
  title: "Courses — ByteSpace",
  description: "Find your next course on ByteSpace.",
}

const categories = [...categoryRows[0], "Cooking"]
const catalog = Array.from({ length: 18 }, (_, i) => courses[i % courses.length])
const totalPages = 5

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)

export default async function CoursesPage({ searchParams }: PageProps<"/courses">) {
  const sp = await searchParams
  const query = first(sp.q)?.trim() ?? ""
  const category = first(sp.category) ?? slugify(categories[0])
  const page = Math.min(Math.max(Number(first(sp.page)) || 1, 1), totalPages)

  const results = query
    ? catalog.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
    : catalog

  const params: Record<string, string> = { ...(query && { q: query }), category }

  return (
    <>
      <main className="flex-1">
        <SearchHeader query={query} />

        <section className="mx-auto max-w-site px-4 pt-10 pb-16 md:px-6 md:pt-[72px] md:pb-[70px] xl:px-0">
          <FilterBar categories={categories} active={category} query={query} />

          {results.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-[76px] lg:grid-cols-3 lg:gap-10">
              {results.map((c, i) => (
                <CourseCard key={`${c.slug}-${i}`} course={c} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-ink-500 md:mt-24">
              No courses match &ldquo;{query}&rdquo;.
            </p>
          )}

          {results.length > 0 && (
            <div className="mt-12 md:mt-[70px]">
              <Pagination page={page} totalPages={totalPages} params={params} />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
