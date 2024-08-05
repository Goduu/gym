import React, { FC } from 'react'
import { TbLogout2 } from '../Icons'
import { signOut, userMetadata } from 'src/lib/auth'
import { Button } from '../Button'
import { Tooltip } from '../Tooltip'

export const UserLogoutButton: FC = async () => {
    let user = await userMetadata()

    const disabled = !user

    return (
        <Tooltip text='Logout' disabled={disabled} position='bottom'>
            <Button handleClick={signOut} color="secondary"  disabled={disabled} className={`${disabled ? "opacity-0" : "opacity-100"}`}>
                <TbLogout2 className="w-6 h-6" />
            </Button>
        </Tooltip>
    )
}
