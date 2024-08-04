"use server"
import { createClient } from "src/lib/supabase/server";
import { cache } from 'react'

type UpsertRatingParams = {
    userId: string;
    activityId: number;
    rating: number;
}

export const upsertRating = cache(async ({ userId, activityId, rating }: UpsertRatingParams) => {
    const supabase = createClient();

    const { error } = await supabase
        .from('rating')
        .upsert([{ user_id: userId, activity_id: activityId, rating }]);

    if (error) {
        console.error('Error upserting rating:', error)
        return false
    }

    return true

})
