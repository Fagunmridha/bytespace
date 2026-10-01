import { courses, type Course } from "./landing-data"

export type Lesson = { title: string; duration: string }

export type Module = { title: string; summary: string }

export type Review = {
  name: string
  role: string
  avatar: string
  rating: number
  date: string
  text: string
}

export type CourseDetails = Course & {
  headline: string
  subtitle: string
  reviews: number
  students: number
  lessonCount: number
  moreVideos: number
  totalHours: number
  curriculum: Lesson[]
  modules: Module[]
  progress: number
  ratingSummary: { average: number; breakdown: { count: number; share: number }[] }
  reviewList: Review[]
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
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      summary:
        "Lay the groundwork with lessons like ‘Understanding Digital Elements’ and ‘Navigating Design Software Tools.’ Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      summary:
        "Master the principles that drive impactful designs with lessons such as ‘Color Theory in Digital Design’ and ‘Typography Essentials.’ Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      summary:
        "Understand ‘Design Thinking in Digital Creation’ and delve into ‘User Experience (UX) Essentials.’ Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      summary:
        "Engage your audience with lessons like ‘Creating Interactive Presentations’ and ‘Integrating Multimedia Elements.’ Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      summary:
        "Perfect your presentation skills with ‘Effective Presentation Techniques’ and embrace collaboration with ‘Peer Critique and Collaboration.’ Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      summary:
        "Adapt your digital creations for ‘Mobile Platforms’ and optimize for ‘Social Media.’ Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  progress: 55,
  ratingSummary: {
    average: 4.7,
    breakdown: [
      { count: 720, share: 93 },
      { count: 120, share: 36 },
      { count: 21, share: 7 },
      { count: 12, share: 5 },
      { count: 16, share: 5 },
    ],
  },
  reviewList: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "/avatars/reviewer-purepearl.png",
      rating: 5,
      date: "a year ago",
      text: "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "/avatars/albert-flores.png",
      rating: 5,
      date: "a year ago",
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "/avatars/cody-fisher.png",
      rating: 5,
      date: "a year ago",
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "/avatars/brooklyn-simmons.png",
      rating: 5,
      date: "a year ago",
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
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
