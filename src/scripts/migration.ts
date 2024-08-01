require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

const createTables = async () => {
    try {
        // Create ratings table if not exists
        const xongas = await supabase.rpc('execute_sql', {
            sql: `
        CREATE TABLE IF NOT EXISTS ratings (
          id SERIAL PRIMARY KEY,
          user_id UUID NOT NULL,
          activity_id UUID NOT NULL,
          rating INT CHECK (rating >= 1 AND rating <= 10),
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `,
        });

        // Create activity_history table if not exists
        await supabase.rpc('execute_sql', {
            sql: `
        CREATE TABLE IF NOT EXISTS activity_history (
          id SERIAL PRIMARY KEY,
          user_id UUID NOT NULL,
          activity_id UUID NOT NULL,
          code TEXT NOT NULL,
          successful_tests INT[] NOT NULL DEFAULT '{}'
          completed_at TIMESTAMPTZ DEFAULT NOW()
        );
      `,
        });

        console.log('Tables created successfully!',xongas);
    } catch (error) {
        console.error('Error creating tables:', error);
    }
};

createTables();