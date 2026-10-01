import { CreatorCta } from "@/components/landing/creator-cta"
import { Discover } from "@/components/landing/discover"
import { Footer } from "@/components/landing/footer"
import { Growth } from "@/components/landing/growth"
import { Hero } from "@/components/landing/hero"
import { LogoCloud } from "@/components/landing/logo-cloud"
import { Testimonials } from "@/components/landing/testimonials"

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Discover />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
