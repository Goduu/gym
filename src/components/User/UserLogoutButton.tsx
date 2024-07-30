import React, { FC } from 'react'
import { TbLogout2 } from '../Icons'
import { auth } from 'src/lib/auth'
import { ServerButton } from '../ServerButton'
import { Tooltip } from '../Tooltip'
import { singOutAsync } from 'src/lib/login-utils'

export const UserLogoutButton: FC = async () => {
    let session = await auth();
    let user = session?.user;

    return (
        <Tooltip text='Logout' disabled={!user}>
            <ServerButton handleClick={singOutAsync} disabled={!user} className={`transition ease-in-out delay-150 hover:scale-110 duration-150 ${user ? "opacity-100" : "opacity-0"}`}>
                <TbLogout2 className="w-6 h-6" />
            </ServerButton>
        </Tooltip>
    )
}
