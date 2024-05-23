"use client"

import { useTheme } from "next-themes"
import { FaRegMoon, FaRegSun } from "./Icons"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-7 h-7 flex items-center justify-center">
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <FaRegSun className="w-5 h-5" />
      ) : (
        <FaRegMoon className="w-5 h-5" />
      )}
    </button>
  )
}
