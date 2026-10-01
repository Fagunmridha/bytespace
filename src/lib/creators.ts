import { courses, type Course } from "./landing-data"

export type Creator = {
  slug: string
  name: string
  tagline: string
  avatar: string
  bio: string[]
  products: number
  followers: number
  courses: Course[]
}

const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/avatars/purepearl-studio.png",
    bio: [
      "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
    courses: courses.filter((c) => c.author === "purepearl studio"),
  },
]

export const creatorSlugs = creators.map((c) => c.slug)

export function getCreator(slug: string) {
  return creators.find((c) => c.slug === slug)
}
