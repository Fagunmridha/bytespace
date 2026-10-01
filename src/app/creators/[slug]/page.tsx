import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { FilterToolbar } from "@/components/courses/filter-bar"
import { CreatorHero } from "@/components/creator/creator-hero"
import { CourseCard } from "@/components/landing/course-card"
import { Footer } from "@/components/landing/footer"
import { creatorSlugs, getCreator } from "@/lib/creators"

export function generateStaticParams() {
  return creatorSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug)
  return creator ? { title: `${creator.name} — ByteSpace`, description: creator.tagline } : {}
}

export default async function CreatorPage({ params }: PageProps<"/creators/[slug]">) {
  const creator = getCreator((await params).slug)
  if (!creator) notFound()

  return (
    <>
      <main className="flex-1">
        <CreatorHero creator={creator} />

        <section className="mx-auto max-w-site px-4 pt-10 pb-16 md:px-6 md:pt-[68px] xl:px-0">
          <FilterToolbar />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {creator.courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
