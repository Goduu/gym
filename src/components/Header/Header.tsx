import Link from 'next/link'
import React from 'react'
import { User } from '../User/User'
import { Jyms } from '../Icons'

export const Header = () => {
    return (
        <header className='py-7'>
            <Link href="/">
                <Jyms className="h-20 mb-10 drop-shadow-lg dark:drop-shadow-[0_10px_8px_rgba(255,255,255,0.3)]" />
            </Link>
            <User />
        </header>
    )
}
