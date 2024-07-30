import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics } from "@/components/analytics"
import { Header } from "@/components/Header/Header"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { Footer } from "@/components/Header/Footer"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <SessionProvider >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <div className="flex flex-col py-10 px-4 place-items-center">
              <main>{children}</main>
            </div>
            <Analytics />
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
