import { Button } from "@/components/Button"
import { signInWithGithub } from "src/lib/auth"

export default function Home() {
  return (
    <div className="text-center content-center h-96">
      <div className="flex flex-col gap-10">
        <div className="text-xl">
          Sign in to save your progress and rate the exercises you&apos;ve completed.
        </div>
        <Button handleClick={signInWithGithub}>
          Sign in with GitHub
        </Button>
      </div>
    </div>
  )
}
