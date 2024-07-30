import Link from 'next/link'
import React from 'react'
import { FaSquareGithub } from '../Icons'
import { ModeToggle } from '../ModeToggle'

export const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="flex items-center gap-6 justify-center py-10">
                <Link href="https://github.com/Goduu/gym" target="_blank" >
                    <FaSquareGithub className="w-7 h-7" />
                </Link>
                <ModeToggle />
            </div>
        </footer>
    )
}
