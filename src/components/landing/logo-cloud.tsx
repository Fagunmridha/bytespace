import Image from "next/image"

const partners = [1, 2, 3, 4, 5].map((n) => `/partners/partner-${n}.png`)

export function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="bg-ink-50 py-14 md:py-20">
      <ul className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4 md:px-6 lg:justify-between lg:gap-x-0">
        {partners.map((src) => (
          <li key={src}>
            <Image src={src} alt="Logoipsum" width={170} height={42} className="h-9 w-auto md:h-[42px]" />
          </li>
        ))}
      </ul>
    </section>
  )
}
