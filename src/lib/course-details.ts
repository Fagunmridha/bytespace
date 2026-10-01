import { courses, type Course } from "./landing-data"

export type Lesson = { title: string; duration: string }

export type CourseDetails = Course & {
  headline: string
  subtitle: string
  reviews: number
  students: number
  lessonCount: number
  moreVideos: number
  totalHours: number
  curriculum: Lesson[]
  description: string[]
  sneakPeek: { src: string; alt: string }[]
  keyPoints: string[]
}

const shared: Omit<CourseDetails, keyof Course | "headline"> & Pick<Course, "level" | "rating"> = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  level: "Intermediate",
  rating: 4.8,
  reviews: 172,
  students: 199,
  lessonCount: 112,
  moreVideos: 99,
  totalHours: 24,
  curriculum: [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [
    { src: "/course/peek-sketch.png", alt: "Sketching wireframes on paper" },
    { src: "/course/peek-laptop.png", alt: "Design system open on a laptop" },
    { src: "/course/peek-imac.png", alt: "UI components on a desktop monitor" },
    { src: "/course/peek-mobile.png", alt: "Colourful mobile app screens" },
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
}

const headlines: Record<string, string> = {
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
}

export function getCourseDetails(slug: string): CourseDetails | undefined {
  const course = courses.find((c) => c.slug === slug)
  if (!course) return undefined
  return {
    ...course,
    ...shared,
    headline: headlines[slug] ?? course.title,
  }
}
