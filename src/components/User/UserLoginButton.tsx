import React, { FC } from 'react'
import { FaRegUser } from '../Icons'
import { userMetadata } from 'src/lib/auth'
import { Button } from '../Button'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Tooltip } from '../Tooltip'

export const UserLoginButton: FC = async () => {
    let user = await userMetadata()

    const handleClick = async () => {
        "use server"
        if (!user) {
            redirect("/login")
        }
    }

    return (
        <Tooltip text={`${user ? user.email : "Login"}`} position='bottom'>
            <Button className='border rounded-md h-fit p-2'>
                <Link href={!user ? "/login" : ""}>
                    <FaRegUser className='w-8' />
                </Link>
            </Button>
        </Tooltip>
    )
}
