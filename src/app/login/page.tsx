import { Button } from "@/components/Button"
import { FaGithub } from "@/components/Icons"
import { signInWithGithub } from "src/lib/auth"

export default function Home() {

  return (
    <div className="text-center content-center h-96">
      <div className="flex flex-col gap-10">
        <div className="text-xl">
          Sign in to save your progress and rate the exercises you&apos;ve completed.
        </div>
        <div className="flex items-center flex-col">
          <Button handleClick={signInWithGithub} className="flex gap-2">
            <FaGithub className="w-5" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
