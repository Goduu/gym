"use client"
import { Gym } from "@/components/Icons"
import { allPosts } from "@contentlayer/generated"
import Image from "next/image"
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
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))
      }
    </div >
  )
}
