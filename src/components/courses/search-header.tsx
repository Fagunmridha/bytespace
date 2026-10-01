import { ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/landing/navbar"

export function SearchHeader({ query }: { query?: string }) {
  return (
    <section className="relative isolate bg-brand-800 pb-12 text-white md:pb-[70px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.12)_1px,transparent_1px)] bg-size-[240px_124px] bg-position-[calc(50%+120px)_-7px]"
      />

      <Navbar />

      <div className="mx-auto max-w-site px-4 pt-6 text-center md:px-6 md:pt-[66px] xl:px-0">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight md:text-4xl">
          Find Your Next Course
        </h1>

        <form
          action="/courses"
          role="search"
          className="mx-auto mt-6 flex w-full max-w-[627px] items-center gap-3 md:mt-8 md:gap-4"
        >
          <label className="relative flex-1">
            <span className="sr-only">Search courses</span>
            <Search className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-ink-500" />
            <Input
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search"
              className="h-12 rounded-full border-0 bg-white pl-12 text-base text-ink-950 placeholder:text-ink-400 md:text-base"
            />
          </label>
          <label className="relative shrink-0">
            <span className="sr-only">Search in</span>
            <select
              name="type"
              defaultValue="courses"
              className="h-12 cursor-pointer appearance-none rounded-full bg-lime-500 pr-12 pl-6 text-base font-medium text-ink-950 outline-none hover:bg-lime-400 focus-visible:ring-3 focus-visible:ring-white/50"
            >
              <option value="courses">Courses</option>
              <option value="creators">Creators</option>
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-5 size-5 -translate-y-1/2 text-ink-950" />
          </label>
        </form>
      </div>
    </section>
  )
}
