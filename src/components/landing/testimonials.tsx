import Image from "next/image"
import { testimonials } from "@/lib/landing-data"

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] py-20 md:py-28">
      {/* soft colour glows */}
      <div aria-hidden className="absolute inset-0 -z-10 [&>span]:absolute [&>span]:rounded-full [&>span]:blur-[120px]">
        <span className="top-[-10%] left-[45%] size-[480px] bg-lime-300/50" />
        <span className="top-[20%] right-[-10%] size-[420px] bg-lime-200/60" />
        <span className="bottom-[-15%] left-[-8%] size-[440px] bg-brand-200/60" />
      </div>

      <div className="mx-auto max-w-site px-4 md:px-6 xl:px-0">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink-950 md:text-[44px] md:leading-[1.25]">
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>
          <p className="text-base leading-7 font-light text-ink-700 lg:ml-[37px] lg:leading-[1.8]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
            Hear directly from those who have experienced the transformative journey of learning and
            creating on our platform. Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid items-start gap-6 md:mt-[72px] md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="rounded-[24px] bg-white p-6">
                <Image src={t.avatar} alt="" width={80} height={80} className="size-20 rounded-full" />
                <figcaption className="mt-4">
                  <p className="text-lg font-semibold text-ink-950">{t.name}</p>
                  <p className="text-base text-brand-700">{t.role}</p>
                </figcaption>
                <blockquote className="mt-6 text-base leading-[1.8] font-light text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
