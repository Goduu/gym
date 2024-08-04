import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics } from "@/components/analytics"
import { Header } from "@/components/Header/Header"
import { ReactNode } from "react"
import { Footer } from "@/components/Header/Footer"
import { fetchRatingByActivityId } from "./api-functions/fetchRatingByActivityId"
import { RatingContextWrapper } from "@/components/Rating/Context"
import { fetchUserRatings } from "./api-functions/fetchUserRatings"
import { userMetadata } from "src/lib/auth"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const ratings = await fetchRatingByActivityId() || {}
  const userData = await userMetadata()
  const userRatings = userData ? await fetchUserRatings(userData?.id) : {}

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex flex-col py-10 px-4 place-items-center">
            <main>
              <RatingContextWrapper ratings={ratings} userRatings={userRatings}>
                {children}
              </RatingContextWrapper>
            </main>
          </div>
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
