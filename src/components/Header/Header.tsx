import Link from 'next/link'
import React from 'react'
import { FaSquareGithub } from '../Icons'
import { ModeToggle } from '../ModeToggle'
import { User } from '../User/User'

export const Header = () => {
    return (
        <header>
            <div className="flex items-center gap-6">
                <nav className="ml-auto text-sm font-medium space-x-6">
                    <Link href="/">Home</Link>
                </nav>
                <Link href="https://github.com/Goduu/gym" target="_blank" >
                    <FaSquareGithub className="w-7 h-7" />
                </Link>
                <ModeToggle />
                <User />
            </div>
        </header>
    )
}
