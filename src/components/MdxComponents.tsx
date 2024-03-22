"use client"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { CodeEditor } from "@/components/CodeEditor/CodeEditor"
import { FC } from "react"
const components = {
  Image,
  CodeEditor
}

interface MdxProps {
  code: string
}

export const Mdx: FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
