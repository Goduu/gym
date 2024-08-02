import React, { FC } from 'react'
import { FaRegUser } from '../Icons'
import { Tooltip } from '../Tooltip'
import { userMetadata } from 'src/lib/auth'
import { redirect } from 'next/navigation'
import { Button } from '../Button'

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
            <Button className='border rounded-md h-fit p-2' handleClick={handleClick}>
                <FaRegUser className='w-8' />
            </Button>
        </Tooltip>
    )
}
