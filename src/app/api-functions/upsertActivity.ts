"use server"
import { createClient } from "src/lib/supabase/server";
import { cache } from 'react'

type upsertActivityParams = {
    userId: string;
    activityId: number;
    code: string;
    successfulTests: number[];
}

export const upsertActivity = cache(async ({ userId, activityId, code, successfulTests }: upsertActivityParams) => {
    const supabase = createClient();

    const { error } = await supabase
        .from('activity')
        .upsert([{ id: activityId, user_id: userId, code, successful_tests: successfulTests }]);

    if (error) {
        console.error('Error upserting activity:', error)
        return false
    }

    return true

})
