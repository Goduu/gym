import React, { FC } from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { IoSettingsOutline } from '../Icons'
import { auth } from 'src/lib/auth'
import { Tooltip } from '../Tooltip'

export const UserSettings: FC = async () => {
    let session = await auth();
    let user = session?.user;

    const disabled = !user

    return (
        <Tooltip text='Settings' disabled={disabled}>
            <Button disabled={disabled} className={`transition ease-in-out delay-150 hover:scale-110 duration-150 ${disabled ? "opacity-0" : "opacity-100"}`}>
                <Link href={disabled ? "" : "/user"} className={disabled ? "!cursor-default" : ""}>
                    <IoSettingsOutline className="w-6 h-6" />
                </Link >
            </Button >
        </Tooltip>
    )
}
