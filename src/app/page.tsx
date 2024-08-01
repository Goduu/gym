import { Rating } from "@/components/Rating/Rating"
import { allPosts } from "@contentlayer/generated"
import Link from "next/link"

export default async function Home() {
  return (
    <div className="prose dark:prose-invert justify-center items-center w-full">
      {
        allPosts.map((post) => (
          <article key={post._id}>
            <h2 className="flex items-center gap-4 justify-between">
              <Link href={post.slug}>
                {post.title}
              </Link>
              <Rating activityId={post.id} disabled />
            </h2>
            {post.description && <p>{post.description}</p>}
          </article>
        ))
      }
    </div >
  )
}
