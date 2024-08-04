"use client"
import { createContext, FC, ReactNode, useContext } from 'react'
import { RatingByActivityId } from 'src/app/api-functions/fetchRatingByActivityId'

type RatingContext = {
    userRatings: RatingByActivityId
    ratings: RatingByActivityId
}


type RatingContextWrapperProps = {
    children: ReactNode,
    userRatings?: RatingByActivityId
    ratings?: RatingByActivityId
}

const RatingContext = createContext<RatingContext>({
    userRatings: {},
    ratings: {}
})

export const RatingContextWrapper: FC<RatingContextWrapperProps> = ({ children, ratings = {}, userRatings = {} }) => {

    return (
        <RatingContext.Provider value={{ ratings, userRatings }} >
            {children}
        </RatingContext.Provider>
    )
}

export function useRatingContext() {
    return useContext(RatingContext);
}