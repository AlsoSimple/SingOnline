import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Supabase URL and API Key
const SUPABASE_URL = 'https://dbictdzmeijvxcsxjgxy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaWN0ZHptZWlqdnhjc3hqZ3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NTM4NzIsImV4cCI6MjA0NTMyOTg3Mn0.frOdaudQ2G5J82Ea8s1nEctCX3pfaMrf_A1VxGoRmdA';

// Create a new Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Function to fetch data
export const fetchData = async () => {
    try {
        // Fetch data from the Albums table
        const { data, error } = await supabase
            .from('albums')                      // Table name
            .select('title, image, artist_id')    // Select columns and relations
            .order('title', { ascending: true }); // Sorting by title ASC

        if (error) {
            throw error;
        }

        console.log(data);
        return data;

    } catch (error) {
        console.error('Fetch Error', error);
    }
};

// Call the function
fetchData();
