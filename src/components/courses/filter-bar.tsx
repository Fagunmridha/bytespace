import Image from "next/image"
import Link from "next/link"
import { ListFilter } from "lucide-react"
import { cn } from "@/lib/utils"

const filters = [
  { label: "Filter", icon: "/icons/filter.png" },
  { label: "Level", icon: "/icons/level.png" },
  { label: "Category", icon: "/icons/category.png" },
]

const pill =
  "flex h-12 shrink-0 items-center gap-2 rounded-full border border-ink-200 bg-white px-4 text-[15px] text-ink-950 transition-colors hover:bg-ink-50"

export function slugify(label: string) {
  return label.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

type FilterBarProps = { categories: string[]; active: string; query?: string }

export function FilterBar({ categories, active, query }: FilterBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-[18px]">
          {filters.map((f) => (
            <button key={f.label} type="button" className={pill}>
              <Image src={f.icon} alt="" width={24} height={24} className="size-5" />
              {f.label}
            </button>
          ))}
        </div>
        <button type="button" className={cn(pill, "hidden sm:flex")}>
          <ListFilter aria-hidden className="size-5" />
          Most relevant
        </button>
      </div>

      <nav
        aria-label="Course categories"
        className="-mx-4 mt-8 flex gap-[18px] overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:px-0 lg:justify-between lg:gap-3"
      >
        {categories.map((c) => {
          const slug = slugify(c)
          const params = new URLSearchParams({ ...(query && { q: query }), category: slug })
          return (
            <Link
              key={c}
              href={`/courses?${params}`}
              aria-current={slug === active ? "page" : undefined}
              className={cn(
                "flex h-11 shrink-0 items-center rounded-full px-4 text-[15px] whitespace-nowrap transition-colors",
                slug === active ? "bg-lime-500 text-ink-950" : "bg-ink-50 text-ink-700 hover:bg-ink-100"
              )}
            >
              {c}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
