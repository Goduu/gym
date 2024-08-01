"use client"
import React, { FC } from 'react'
import { useRating } from './useRating'
import { Button } from '../Button'


type RatingProps = {
    activityId: number
    disabled?: boolean
}

export const Rating: FC<RatingProps> = ({ activityId, disabled }) => {
    const { rating, setRating } = useRating()

    const handleChangeRate = () => {
        fetch(`/api/supabase/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: 31113885, activity_id: activityId, rating: rating }),
        })
    }

    return (
        <div className='flex'>
            <input
                type="range"
                value={rating}
                min={0}
                max={10}
                step={0.1}
                onChange={(e) => setRating && setRating(parseFloat(e.target.value))}
                className={`appearance-none 
                    bg-gradient-to-r from-green-400 via-yellow-400 to-red-400
                    dark:from-green-600 dark:via-yellow-600 dark:to-red-600
                    rounded-full `}
                disabled={disabled} />
            {/* <Button handleClick={handleChangeRate} className='ml-2'>Send My Rating</Button> */}
        </div>
    )
}

