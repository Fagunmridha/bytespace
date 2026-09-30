import type { ReactNode } from "react"

// Placeholder partner marks — swap for real partner logos when available.
const icons: ReactNode[] = [
  // wave globe
  <svg key="wave" viewBox="0 0 40 40" fill="currentColor" aria-hidden>
    <path d="M20 2a18 18 0 0 1 17.5 13.8c-5.5-3.7-11.8-3.7-17.5 0S7.9 19.5 2.5 15.8A18 18 0 0 1 20 2Z" />
    <path d="M38 20v.6c-5.8-3.9-12.2-3.9-18 0s-12.2 3.9-18 0V20c0-.5 0-1 .1-1.5 5.7 3.6 12 3.6 17.9-.3 5.8-3.9 12.1-3.9 17.9-.3l.1 2.1Z" />
    <path d="M37 25.8A18 18 0 0 1 3 25.8c5.6 3.3 11.4 3.1 17-.6s11.4-3.9 17 .6Z" />
  </svg>,
  // sunburst
  <svg key="sun" viewBox="0 0 40 40" fill="currentColor" aria-hidden>
    <circle cx="20" cy="20" r="7.5" />
    {Array.from({ length: 12 }, (_, i) => (
      <rect key={i} x="18.5" y="1" width="3" height="9" rx="1.5" transform={`rotate(${i * 30} 20 20)`} />
    ))}
  </svg>,
  // bolt
  <svg key="bolt" viewBox="0 0 40 40" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M20 38a18 18 0 1 0 0-36 18 18 0 0 0 0 36Zm2.4-29L12 22.2h7.3L17.6 31 28 17.8h-7.3L22.4 9Z"
    />
  </svg>,
  // four dots
  <svg key="dots" viewBox="0 0 40 40" fill="currentColor" aria-hidden>
    <circle cx="20" cy="20" r="18" />
    <g className="fill-ink-50">
      <circle cx="20" cy="12.5" r="4.5" />
      <circle cx="20" cy="27.5" r="4.5" />
      <circle cx="12.5" cy="20" r="4.5" />
      <circle cx="27.5" cy="20" r="4.5" />
    </g>
  </svg>,
  // concentric rings
  <svg key="rings" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="20" cy="20" r="17" />
    <circle cx="23" cy="18" r="13" />
    <circle cx="25.5" cy="16.5" r="9" />
    <circle cx="27.5" cy="15" r="5" />
  </svg>,
]

export function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="bg-ink-50 py-14 md:py-20">
      <ul className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4 text-ink-400 md:px-6 lg:justify-between lg:gap-x-0">
        {icons.map((icon, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="size-9 md:size-10 [&>svg]:size-full">{icon}</span>
            <span className="text-lg font-bold tracking-tight md:text-xl">Logoipsum</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
