const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function checkSupabase() {
    const envPath = path.join(__dirname, '.env.local');
    if (!fs.existsSync(envPath)) {
        console.log("❌ .env.local not found");
        return;
    }

    const env = fs.readFileSync(envPath, 'utf8');
    const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/);
    const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/);

    if (!urlMatch || !keyMatch) {
        console.log("❌ URL or Key missing in .env.local");
        return;
    }

    // Clean up URL: remove trailing /rest/v1/ if the user added it manually
    let url = urlMatch[1].trim().replace(/\/rest\/v1\/?$/, '');
    const key = keyMatch[1].trim();

    console.log(`Checking connection to: ${url}`);
    
    try {
        const response = await fetch(`${url}/rest/v1/chat_logs?select=count`, {
            headers: {
                'apikey': key,
                'Authorization': `Bearer ${key}`
            }
        });

        if (response.ok) {
            console.log("✅ Supabase Keys are CORRECT and table exists!");
        } else {
            const error = await response.text();
            console.log(`❌ Supabase Error (${response.status}): ${error}`);
            
            if (response.status === 404 && error.includes("PGRST116")) {
                console.log("💡 Hint: Table 'chat_logs' might not be created yet.");
            } else if (response.status === 401 || response.status === 403) {
                console.log("💡 Hint: Your API key might be incorrect.");
            }
        }
    } catch (err) {
        console.log(`❌ Network Error: ${err.message}`);
    }
}

checkSupabase();
