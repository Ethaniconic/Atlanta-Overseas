const fs = require('fs');
const path = require('path');
const envPath = path.join(__dirname, '.env.local');
let content = fs.readFileSync(envPath, 'utf8');
content = content.replace(/^GROQ_API_KEY=/m, 'ATLANTA_GROQ_KEY=');
fs.writeFileSync(envPath, content);
console.log('Renamed GROQ_API_KEY to ATLANTA_GROQ_KEY in .env.local');
