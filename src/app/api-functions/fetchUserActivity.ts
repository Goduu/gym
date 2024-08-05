"use server"
import { createClient } from "src/lib/supabase/server";

export type Activity = {
    id: number,
    code: string,
    successfulTests: number[],
    userId: string
}

export const fetchUserActivity = async (user_id: string, activityId: number) => {
    const supabase = createClient();
    const { data, error } = await supabase
        .from("activity")
        .select("*")
        .eq("user_id", user_id)
        .eq("id", activityId)
        .single();

    if (error) {
        console.error('Error fetching activity:', error)
        return
    }

    return {
        id: data.id,
        code: data.code,
        successfulTests: data.successful_tests,
        userId: data.user_id
    }


}