"use client"
import React, { FC, useState } from 'react'
import { Button } from '../Button'
import { Difficulty } from '../Difficulty/Difficulty'
import { SpeedHard } from '../Icons'
import { RatingModal } from './RatingModal'

type GiveRatingProps = {
    activityId: number
    userId?: string
}
export const GiveRating: FC<GiveRatingProps> = ({ activityId, userId }) => {
    const [newRatingModalVisible, setNewRatingModalVisible] = useState<boolean>(false)
    const loggedUser = !!userId

    const open = () => {
        loggedUser && setNewRatingModalVisible(true)
    }
    const close = () => {
        setNewRatingModalVisible(false)
    }

    return (
        <div className='flex gap-4 group'>
            <Button size='small' handleClick={open} disabled={!loggedUser}>
                <div className='leading-4 flex flex-col items-center px-1'>
                    <SpeedHard className='w-5' />
                    Rate Me
                </div>
            </Button>
            <Difficulty rating={5} />
            {loggedUser &&
                <RatingModal activityId={activityId} visible={newRatingModalVisible} currentRating={5} userId={userId} close={close} />
            }
        </div >
    )
}
