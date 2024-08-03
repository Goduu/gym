export const fetchRatingByActivityId = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_URL
    const response = await fetch(`${baseUrl}/api/supabase/rating`, {
        method: 'GET',
        next: { revalidate: 60 }, //revalidate cache every 4 minutes
    })

    if (response.ok) {
        const responseJson = await response.json()
        const mapping = {}
        responseJson.data.forEach((rating) => mapping[rating.activity_id] = rating.mean_rating)
        return mapping
    }
}