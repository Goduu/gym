import { NextResponse } from "next/server";
import { createClient } from "src/lib/supabase/server";

export async function POST(req, res) {
    const supabase = createClient();
    const { user_id, activity_id, rating } = await req.json();

    const { data, error } = await supabase
        .from('rating')
        .upsert([{ user_id, activity_id, rating }]);

    if (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500
        });
    }

    return new NextResponse(JSON.stringify(data), {
        status: 201
    });
}

export async function DELETE(req, res) {
    const { id } = req.body;

    const { data, error } = await supabase
        .from('rating')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
}


export async function GET(req, res) {
    const supabase = createClient();
    const { data, error } = await supabase
        .rpc('get_activity_ratings')
    console.log("data", data)
    if (error) {
        console.error('Error fetching activity ratings:', error)
        return null
    }

    return Response.json({ data })

}

export async function PUT(req, res) {
    const { id, rating } = req.body;

    const { data, error } = await supabase
        .from('rating')
        .update({ rating })
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
}