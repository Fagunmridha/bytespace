import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type PaginationProps = { page: number; totalPages: number; params: Record<string, string> }

const arrow =
  "flex size-14 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-950 transition-colors hover:bg-ink-50"

export function Pagination({ page, totalPages, params }: PaginationProps) {
  const href = (p: number) => `/courses?${new URLSearchParams({ ...params, page: String(p) })}`
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      {page > 1 ? (
        <Link href={href(page - 1)} aria-label="Previous page" className={arrow}>
          <ChevronLeft className="size-6" />
        </Link>
      ) : (
        <span aria-disabled className={cn(arrow, "pointer-events-none")}>
          <ChevronLeft className="size-6" />
        </span>
      )}

      <ul className="flex items-center gap-[26px]">
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={href(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "text-lg",
                p === page ? "text-ink-300" : "font-semibold text-ink-950 hover:text-brand-700"
              )}
            >
              {p}
            </Link>
          </li>
        ))}
      </ul>

      {page < totalPages ? (
        <Link href={href(page + 1)} aria-label="Next page" className={arrow}>
          <ChevronRight className="size-6" />
        </Link>
      ) : (
        <span aria-disabled className={cn(arrow, "pointer-events-none")}>
          <ChevronRight className="size-6" />
        </span>
      )}
    </nav>
  )
}
