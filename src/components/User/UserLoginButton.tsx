import React, { FC } from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { FaRegUser } from '../Icons'
import { auth } from 'src/lib/auth'
import { Tooltip } from '../Tooltip'

export const UserLoginButton: FC = async () => {
    let session = await auth();
    let user = session?.user;

    if (user) {
        return (
            <Tooltip text={`${user.email}`}>
                <div className='border rounded-md h-fit p-2 transition ease-in-out delay-150 hover:scale-110 duration-300'>
                    <FaRegUser className='w-6' />
                </div>
            </Tooltip>
        )
    }

    return (
        <Tooltip text={`Login`}>
            <Button className='transition ease-in-out delay-150 hover:scale-110 duration-300'>
                <Link href="/login">
                    <FaRegUser className='w-6' />
                </Link>
            </Button>
        </Tooltip>
    )
}
