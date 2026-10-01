import Link from "next/link"
import { Logo } from "./logo"
import { NewsletterForm } from "./newsletter-form"

const columns = [
  [
    { label: "Featured Courses", href: "/courses?filter=featured" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it-software" },
    { label: "Design", href: "/courses?category=design" },
  ],
  [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ],
  [
    { label: "Become a Creator", href: "/join?as=creator" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
]

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
]

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-site px-4 md:px-6 xl:px-0">
        <div className="flex flex-col gap-12 pt-16 pb-16 md:pt-[72px] lg:flex-row lg:justify-between lg:pb-[130px]">
          <div className="max-w-[560px]">
            <Logo variant="dark" />
            <p className="mt-4 text-sm text-ink-950">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-10">
              <NewsletterForm />
            </div>
            <p className="mt-6 max-w-[470px] text-xs leading-5 text-ink-700">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-[54px] lg:w-[584px] lg:gap-0">
            {columns.map((links, i) => (
              <ul key={i} className="space-y-4">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-ink-800 transition-colors hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-200 py-8 text-xs text-ink-950 sm:flex-row sm:items-center sm:justify-between md:pb-12">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-brand-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
