import React, { FC } from 'react'
import { TbLogout2 } from '../Icons'
import { signOut, userMetadata } from 'src/lib/auth'
import { Tooltip } from '../Tooltip'
import { Button } from '../Button'

export const UserLogoutButton: FC = async () => {
    let user = await userMetadata()

    const disabled = !user

    return (
        <Tooltip text='Logout' disabled={disabled}>
            <Button handleClick={signOut} color="secondary"  disabled={disabled} className={`${disabled ? "opacity-0" : "opacity-100"}`}>
                <TbLogout2 className="w-6 h-6" />
            </Button>
        </Tooltip>
    )
}
