"use client"
import { useMDXComponent } from "next-contentlayer/hooks"
import { CodeEditor } from "@/components/CodeEditor/CodeEditor"
import { FC } from "react"
import { MDXComponents } from "@mdx-js/react/lib"


const components: MDXComponents = {
  CodeEditor
}

interface MdxProps {
  code: string
}

export const Mdx: FC<MdxProps> = ({ code }) => {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={{CodeEditor}} />
}
