const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function testGemini() {
    const envPath = path.join(__dirname, '.env.local');
    if (!fs.existsSync(envPath)) {
        console.log("❌ .env.local not found");
        return;
    }

    const env = fs.readFileSync(envPath, 'utf8');
    const keyMatch = env.match(/GEMINI_API_KEY=(.+)/);

    if (!keyMatch) {
        console.log("❌ GEMINI_API_KEY missing in .env.local");
        return;
    }

    const apiKey = keyMatch[1].trim();
    console.log(`Testing Gemini API Key: ${apiKey.substring(0, 5)}...${apiKey.substring(apiKey.length - 4)}`);

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent("Say 'Atlanta is Ready'");
        const response = await result.response;
        console.log("✅ Success! Gemini Response:", response.text());
    } catch (err) {
        console.log("❌ Gemini API Error:");
        console.error(err);
        
        if (err.message.includes("API_KEY_INVALID")) {
            console.log("💡 Hint: Your API key is invalid. Please get a new one from https://aistudio.google.com/");
        } else if (err.message.includes("403")) {
            console.log("💡 Hint: Permission denied. Your key might not have access to this model or your region is restricted.");
        }
    }
}

testGemini();
