"use client"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { CodeEditor } from "components/CodeEditor/CodeEditor"
const components = {
  Image,
  CodeEditor
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
