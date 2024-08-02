import React, { FC } from 'react'
import { FaRegUser } from '../Icons'
import { Tooltip } from '../Tooltip'
import { userMetadata } from 'src/lib/auth'
import { Button } from '../Button'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const UserLoginButton: FC = async () => {
    let user = await userMetadata()

    const handleClick = async () => {
        "use server"
        if (!user) {
            redirect("/login")
        }
    }

    return (
        <Tooltip text={`${user ? user.email : "Login"}`}>
            <Button className='border rounded-md h-fit p-2'>
                <Link href={!user ? "/login" : ""}>
                    <FaRegUser className='w-8' />
                </Link>
            </Button>
        </Tooltip>
    )
}
