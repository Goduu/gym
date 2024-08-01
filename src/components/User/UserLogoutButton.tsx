import React, { FC } from 'react'
import { TbLogout2 } from '../Icons'
import { signOut, userMetadata } from 'src/lib/auth'
import { ServerButton } from '../ServerButton'
import { Tooltip } from '../Tooltip'

export const UserLogoutButton: FC = async () => {
    let user = await userMetadata()

    const disabled = !user

    return (
        <Tooltip text='Logout' disabled={disabled}>
            <ServerButton handleClick={signOut} disabled={disabled} className={`transition ease-in-out delay-150 hover:scale-110 duration-150 ${disabled ? "opacity-0" : "opacity-100"}`}>
                <TbLogout2 className="w-6 h-6" />
            </ServerButton>
        </Tooltip>
    )
}
