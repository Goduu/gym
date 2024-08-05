import { notFound } from "next/navigation"
import { allPosts } from "@contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/MdxComponents"
import { ImprovementArea } from "@/components/CodeEditor/ImprovementArea"
import { GiveRating } from "@/components/Rating/GiveRating"
import { userMetadata } from "src/lib/auth"
import { CodeEditor } from "@/components/CodeEditor/CodeEditor"
import { Activity, fetchUserActivity } from "src/app/api-functions/fetchUserActivity"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)
  const userData = await userMetadata()

  if (!post) {
    notFound()
  }

  const activity: Activity | null | undefined = userData && await fetchUserActivity(userData.id, post.id)

  return (
    <article className="pb-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <GiveRating activityId={post.id} userId={userData?.id} />
      <hr className="my-4" />
      <h2>Instructions</h2>
      <Mdx code={post.instructions.code} />
      <CodeEditor currentUserProgress={activity} activityId={post.id} initialCode={post.initialCode} checkTests={post.checkTests} />
      <Mdx code={post.body.code} />
      <ImprovementArea pageTitle={post.title} />
    </article>
  )
}
