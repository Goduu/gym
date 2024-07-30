"use client"
import { Gym } from "@/components/Icons"
import { Rating } from "@/components/Rating/Rating"
import { allPosts } from "@contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert justify-center">
      <div className="flex justify-center" >
        <Gym className="dark:fill-white w-3/4" />
      </div>
      {
        allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2 className="flex items-center gap-4">{post.title}
                <Rating ratingId={post._id} disabled />
              </h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))
      }
    </div >
  )
}
