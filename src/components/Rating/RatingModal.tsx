"use client"
import React, { FC, useEffect, useState } from 'react'
import { Chip } from '../Chip/Chip';
import { Button } from '../Button';
import { upsertRating } from 'src/app/api-functions/upsertRating';
import { Loading } from '../Loading';
import { fetchRatingByActivityId } from 'src/app/api-functions/fetchRatingByActivityId';
import { fetchUserRatings } from 'src/app/api-functions/fetchUserRatings';

type RatingModalProps = {
    visible: boolean
    currentRating: number
    activityId: number
    userId: string
    close: () => void
}
export const RatingModal: FC<RatingModalProps> = ({ visible, currentRating, activityId, userId, close }) => {
    const [firstRating, setFirstRating] = useState<FirstRating>()
    const [selectedRating, setSelectedRating] = useState<Rating | null>()
    const filteredRatings = ratingOptions.filter(rating => rating.firstRatingId === firstRating?.id)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const currentSelectedRating = ratingOptions.find(rating => rating.rating === currentRating);
        setSelectedRating(currentSelectedRating);
        const currentFirstRating = firstRatings.find(rating => rating.id === currentSelectedRating?.firstRatingId);
        setFirstRating(currentFirstRating);
    }, [currentRating]);

    const handleChangeFirstRating = (rating: FirstRating) => {
        setFirstRating(rating)
        setSelectedRating(null)
    }

    const confirmRating = async () => {
        if (!selectedRating) return
        setLoading(true)
        await upsertRating({ userId: userId, activityId, rating: selectedRating.rating })
            .then(async (success) => {
                success && close()
                await fetchRatingByActivityId()
                await fetchUserRatings(userId)

            })
            .finally(() => setLoading(false))


    }

    return (
        <div className={`${visible ? "flex" : "hidden"} fixed left-0 top-0  h-full w-full items-center justify-center backdrop-blur-md bg-slate-500 bg-opacity-30 py-10 z-50`}>
            <div className='fixed rounded-3xl bg-zinc-50 dark:bg-slate-800 shadow-sm w-[30rem] m-10'>
                <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-blend-multiply bg-inherit ">
                    <div className="w-full">
                        <div className="flex flex-col items-center m-8 gap-10">
                            <h1 className="text-3xl font-extrabold">Rate this activity</h1>
                            <div className="flex flex-col gap-4 items-center">
                                <div className='flex flex-col items-center gap-8'>
                                    <div className='flex gap-2'>
                                        {firstRatings.map((rating) => {
                                            const selected = firstRating?.id === rating.id
                                            return <Chip key={rating.label} onClick={() => handleChangeFirstRating(rating)} text={rating.label} color={rating.chipColor} selected={selected} faded={!selected} />
                                        }
                                        )}
                                    </div>
                                    <div className='flex gap-1 h-4 sm:gap-2'>
                                        {filteredRatings.map((rating) => {
                                            const selected = selectedRating?.rating === rating.rating
                                            return <Chip
                                                key={rating.label}
                                                onClick={() => setSelectedRating(rating)}
                                                text={rating.label}
                                                color={rating.chipColor}
                                                selected={selected}
                                                faded={!selected} />
                                        }
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-7xl h-16 self-center'>{selectedRating?.rating}</div>
                            <div className="flex gap-4">
                                <Button color='secondary' handleClick={close}>Cancel</Button>
                                <Button disabled={!selectedRating} handleClick={confirmRating}>Confirm</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loading visible={loading} />
        </div>
    )
}



type Rating = {
    firstRatingId: string
    rating: number
    label: string
    chipColor: "red" | "amber" | "green"
}

type FirstRating = {
    id: string
    label: string
    chipColor: "red" | "amber" | "green"
}

const firstRatings: FirstRating[] = [
    { id: "b", label: "Beginner", chipColor: "green" },
    { id: "i", label: "Intermediate", chipColor: "amber" },
    { id: "a", label: "Advanced", chipColor: "red" },
]

const ratingOptions: Rating[] = [
    { firstRatingId: "b", rating: 1, label: "Piece of Cake", chipColor: "green" },
    { firstRatingId: "b", rating: 2, label: "Walk in the Park", chipColor: "green" },
    { firstRatingId: "b", rating: 3, label: "Barely a Sweat", chipColor: "green" },
    { firstRatingId: "i", rating: 4, label: "No Biggie", chipColor: "amber" },
    { firstRatingId: "i", rating: 5, label: "Getting Tricky", chipColor: "amber" },
    { firstRatingId: "i", rating: 6, label: "Sweat Inducing", chipColor: "amber" },
    { firstRatingId: "a", rating: 7, label: "Brain Buster", chipColor: "red" },
    { firstRatingId: "a", rating: 8, label: "Herculean Task", chipColor: "red" },
    { firstRatingId: "a", rating: 9, label: "Nightmare Fuel", chipColor: "red" },
];
