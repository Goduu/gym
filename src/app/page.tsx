"use client"
import { allPosts } from "@contentlayer/generated"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src="/gym.svg" alt="logo" width={400} height={400} className="text-white" />
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
