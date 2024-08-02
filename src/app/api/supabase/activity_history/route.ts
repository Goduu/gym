
export async function POST(req, res) {
    if (req.method === 'POST') {
        const { user_id, activity_id, successful_tests } = await req.json();

        const { data, error } = await supabase
            .from('activity_history')
            .insert([{ user_id, activity_id, successful_tests }]);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(201).json(data);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


export async function GET(req, res) {
    if (req.method === 'GET') {
        const { user_id } = req.query;

        const { data, error } = await supabase
            .from('activity_history')
            .select('*')
            .eq('user_id', user_id);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json(data);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


export async function DELETE(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        const { data, error } = await supabase
            .from('activity_history')
            .delete()
            .eq('id', id);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json(data);
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}