"use client"
import React, { FC, useState } from 'react'
import { Button } from '../Button'
import { Difficulty } from '../Difficulty/Difficulty'
import { SpeedHard } from '../Icons'

type GiveRatingProps = {
    activityId: number
}
export const GiveRating: FC<GiveRatingProps> = ({ activityId }) => {
    const [enableRating, setEnableRating] = useState(false)
    const [newRating, setNewRating] = useState(5)
    const rating = 5.1

    const confirmRating = () => {
        fetch(`/api/supabase/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: 31113885, activity_id: activityId, rating: rating }),
        })
    }

    const handleButtonClick = () => {
        if (enableRating) {
            confirmRating()
            setEnableRating(false)
        } else {
            setEnableRating(true)
        }
    }

    return (
        <div className='flex gap-4 group'>
            <Button size='small' >
                <div className='leading-4 flex flex-col items-center px-1'>
                    <SpeedHard className='w-5' />
                    Rate Me
                </div>
            </Button>
            <Difficulty rating={5} />
        </div >
    )
}
