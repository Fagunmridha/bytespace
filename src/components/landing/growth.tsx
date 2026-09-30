import Image from "next/image"
import { CircleCheck } from "lucide-react"
import { courses } from "@/lib/landing-data"
import { CourseCard } from "./course-card"
import { HappyStudentsCard, ProgressCard } from "./floating-cards"

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
]

const perks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"]

const headingClass =
  "text-3xl leading-tight font-semibold tracking-tight text-ink-950 md:text-[44px] md:leading-[1.25]"

function Spiral({ src, className }: { src: string; className?: string }) {
  return <Image src={src} alt="" aria-hidden width={217} height={216} sizes="217px" className={className} />
}

export function Growth() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] py-20 md:py-28">
      {/* soft colour glows */}
      <div aria-hidden className="absolute inset-0 -z-10 [&>span]:absolute [&>span]:rounded-full [&>span]:blur-[120px]">
        <span className="top-[-8%] left-[22%] size-[460px] bg-lime-300/45" />
        <span className="top-[32%] left-[-12%] size-[420px] bg-brand-200/45" />
        <span className="top-[40%] right-[-12%] size-[420px] bg-brand-100/60" />
        <span className="bottom-[4%] left-[-10%] size-[420px] bg-lime-400/40" />
        <span className="right-[4%] bottom-[-6%] size-[420px] bg-brand-200/50" />
      </div>

      <div className="mx-auto max-w-site px-4 md:px-6 xl:px-0">
        {/* Row 1 — growth */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-[560px]">
            <h2 className={headingClass}>Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-6 max-w-[480px] text-base leading-7 font-light text-ink-700 md:mt-8 md:text-lg md:leading-[1.65]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex gap-12 md:mt-12 md:gap-14">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="text-sm text-ink-700 md:text-base">{s.label}</dt>
                  <dd className="text-3xl font-medium text-brand-800 md:text-[32px]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[576px] sm:h-[560px] lg:mr-0 lg:ml-5">
            <CourseCard course={courses[0]} className="absolute top-0 left-0 hidden w-[372px] sm:block" />
            <Image
              src="/hero/Image.png"
              alt="Student with headphones holding a laptop"
              width={722}
              height={515}
              sizes="707px"
              className="absolute bottom-0 left-1/2 w-[560px] max-w-none -translate-x-[44%] sm:top-[49px] sm:bottom-auto sm:left-[-22px] sm:w-[707px] sm:translate-x-0"
            />
            <Spiral
              src="/shapes/spiral-lime-upright.png"
              className="absolute top-[20px] right-0 z-10 w-[150px] sm:top-[66px] sm:right-auto sm:left-[415px] sm:w-[217px]"
            />
            <ProgressCard className="absolute top-[180px] right-0 sm:top-[214px] sm:right-auto sm:left-[344px]" />
          </div>
        </div>

        {/* Row 2 — creators */}
        <div className="mt-20 grid items-center gap-14 md:mt-28 lg:grid-cols-2 lg:gap-10">
          <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[580px] lg:mx-0">
            <div className="absolute top-0 left-0 z-0 w-[225px] max-sm:z-20 rounded-xl bg-brand-800 p-4 text-white shadow-lg sm:left-[9px]">
              <p className="text-sm">Total Revenue</p>
              <p className="text-[10px] text-white/80">July 1-28</p>
              <p className="mt-2 text-xl font-semibold">$120.29</p>
              <div className="mt-2 h-1.5 w-[150px] overflow-hidden rounded-full bg-white">
                <div className="h-full w-[65%] rounded-full bg-lime-500" />
              </div>
            </div>
            <div className="absolute top-[150px] left-0 z-20 w-[150px] rounded-xl bg-brand-800 p-4 text-white shadow-lg sm:left-[9px]">
              <p className="text-sm">Year to Date</p>
              <p className="text-[10px] text-white/80">2023</p>
              <p className="mt-2 text-xl font-semibold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-lime-500 px-2 py-1 text-[10px] font-medium text-ink-950">
                +12$
              </span>
            </div>

            <Image
              src="/growth/woman.png"
              alt="Smiling course creator with headphones holding a tablet"
              width={579}
              height={719}
              sizes="(min-width: 640px) 453px, 340px"
              className="absolute top-[-10px] left-[29px] z-10 w-[453px] max-w-none max-sm:left-1/2 max-sm:w-[340px] max-sm:-translate-x-1/2"
            />

            <Spiral
              src="/shapes/spiral-lime-tilted.png"
              className="absolute top-[68px] left-[305px] z-20 w-[217px] max-sm:right-0 max-sm:left-auto max-sm:w-[160px]"
            />
            <HappyStudentsCard className="absolute top-[369px] left-[293px] z-20 max-sm:right-0 max-sm:left-auto" />
          </div>

          <div className="max-w-[480px]">
            <h2 className={headingClass}>Create & Manage Courses Easily.</h2>
            <p className="mt-6 text-base leading-7 font-light text-ink-700 md:mt-8">
              <strong className="font-semibold text-ink-950">ByteSpace</strong> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base text-ink-950">
                  <CircleCheck aria-hidden className="size-5 shrink-0 fill-brand-800 text-white" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
