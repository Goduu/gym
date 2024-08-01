import { NextResponse } from "next/server";
import { createClient } from "src/lib/supabase/server";

export async function POST(req, res) {
    const supabase = createClient();
    const { github_id } = req.body;
    
    const { data, error } = await supabase
        .from('users')
        .insert([{ github_id }]);

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
        .from('users')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
}


export async function GET(req, res) {
    const { user_id } = req.query;

    const { data, error } = await supabase
        .from('users')
        .select('*')


    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
}

export async function PUT(req, res) {
    const { id, github_id } = req.body;

    const { data, error } = await supabase
        .from('users')
        .update({ github_id })
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
}