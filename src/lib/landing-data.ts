export type Course = {
  slug: string
  title: string
  image: string
  author: string
  rating: number
  lessons: number
  duration: string
  comments: number
  level: "Beginner" | "Intermediate" | "Advanced"
  enrolled: string
  price: number
}

export const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
]

const base = {
  author: "purepearl studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  enrolled: "26+",
  price: 25,
} as const

export const courses: Course[] = [
  { ...base, slug: "learn-figma-from-basic", title: "Learn Figma from Basic", image: "/courses/figma.png" },
  { ...base, slug: "build-digital-asset", title: "Build Digital Asset", image: "/courses/digital-asset.png" },
  { ...base, slug: "the-power-of-big-data", title: "the Power of Big Data", image: "/courses/big-data.png" },
  {
    ...base,
    slug: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: "/courses/productivity.png",
  },
  {
    ...base,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/courses/money.png",
  },
  {
    ...base,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/courses/startup.png",
  },
]

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/avatars/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/avatars/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/avatars/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]
