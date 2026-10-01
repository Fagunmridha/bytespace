import { redirect } from "next/navigation"
import { creatorSlugs } from "@/lib/creators"

// No creators listing yet — send visitors straight to the first creator's profile.
export default function CreatorsPage() {
  redirect(`/creators/${creatorSlugs[0]}`)
}
