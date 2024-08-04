"use server"
import { createClient } from "src/lib/supabase/server";
import { cache } from 'react'

export type RatingByActivityId = {
    [activityId: number]: number
}

export const fetchRatingByActivityId = cache(async () => {
    const supabase = createClient();
    const { data, error } = await supabase
        .rpc('get_activity_ratings')

    if (error) {
        console.error('Error fetching activity ratings:', error)
        return
    }

    const mapping = {}
    data.forEach((rating) => mapping[rating.activity_id] = rating.mean_rating)

    return mapping

})
