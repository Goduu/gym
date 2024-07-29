"use client"
import React, { FC } from 'react'
import { useRating } from './useRating'


type RatingProps = {
    ratingId: string
    disabled?: boolean
}

export const Rating: FC<RatingProps> = ({ ratingId,disabled }) => {
    const { rating, setRating } = useRating(ratingId)

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
                disabled={disabled}/>
        </div>
    )
}

