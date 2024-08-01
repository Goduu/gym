import React, { FC } from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { FaRegUser } from '../Icons'
import { Tooltip } from '../Tooltip'
import { userMetadata } from 'src/lib/auth'

export const UserLoginButton: FC = async () => {
    let user = await userMetadata()

    if (user) {
        return (
            <Tooltip text={`${user.email}`}>
                <div className='border rounded-md h-fit p-2 transition ease-in-out delay-150 hover:scale-110 duration-300'>
                    <FaRegUser className='w-8' />
                </div>
            </Tooltip>
        )
    }

    return (
        <Tooltip text={`Login`}>
            <Button className='transition ease-in-out delay-150 hover:scale-110 duration-300'>
                <Link href="/login">
                    <FaRegUser className='w-8' />
                </Link>
            </Button>
        </Tooltip>
    )
}
