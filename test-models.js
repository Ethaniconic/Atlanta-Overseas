const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function listModels() {
    const envPath = path.join(__dirname, '.env.local');
    const env = fs.readFileSync(envPath, 'utf8');
    const keyMatch = env.match(/GEMINI_API_KEY=(.+)/);
    const apiKey = keyMatch[1].trim();

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // The SDK doesn't have a direct listModels, we usually just try one.
        // But we can check if 'gemini-pro' works.
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hi");
        const response = await result.response;
        console.log("✅ Success with 'gemini-pro'!");
        console.log("Response:", response.text());
    } catch (err) {
        console.log("❌ Error with 'gemini-pro':", err.message);
        
        try {
            console.log("Trying 'gemini-1.5-pro'...");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            const result = await model.generateContent("Hi");
            console.log("✅ Success with 'gemini-1.5-pro'!");
        } catch (err2) {
            console.log("❌ Error with 'gemini-1.5-pro':", err2.message);
        }
    }
}

listModels();
