"use server"
import { createClient } from "src/lib/supabase/server";
import { revalidateTag } from 'next/cache';

export const fetchUserRatings = async (user_id: string) => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("rating")
        .select("*")
        .eq("user_id", user_id);

    if (error) {
        console.error('Error fetching activity ratings:', error)
        return
    }

    const mapping = {}
    data.forEach((rating) => mapping[rating.activity_id] = rating.rating)

    const cacheTag = `user-ratings-${user_id}`;
    revalidateTag(cacheTag);

    return mapping

}