const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function testGroq() {
    const envPath = path.join(__dirname, '.env.local');
    if (!fs.existsSync(envPath)) {
        console.log("❌ .env.local not found");
        return;
    }

    const env = fs.readFileSync(envPath, 'utf8');
    const keyMatch = env.match(/GROQ_API_KEY=(.+)/);

    if (!keyMatch) {
        console.log("❌ GROQ_API_KEY missing in .env.local");
        return;
    }

    const apiKey = keyMatch[1].trim();
    console.log(`Testing Groq API Key: ${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}`);

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: "Hello" }]
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("✅ Success! Groq Response:", data.choices[0].message.content);
        } else {
            const errorText = await response.text();
            console.log(`❌ HTTP Error: ${response.status} ${response.statusText}`);
            console.log(`❌ Error Details: ${errorText}`);
        }
    } catch (err) {
        console.log("❌ Network or Fetch Error:");
        console.error(err);
    }
}

testGroq();
