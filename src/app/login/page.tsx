import { ServerButton } from "@/components/ServerButton"
import { signInWithGithub } from "src/lib/auth"

export default function Home() {
  return (
    <div className="text-center content-center h-96">
      <div className="flex flex-col gap-10">
        <div className="text-xl">
          Sign in to save your progress and rate the exercises you&apos;ve completed.
        </div>
        <ServerButton handleClick={signInWithGithub}>
          Sign in with GitHub
        </ServerButton>
      </div>
    </div>
  )
}
