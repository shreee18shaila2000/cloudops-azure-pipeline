const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align:center; margin-top:10%; font-family:Arial, sans-serif;">
            <h1 style="color:#0078D4;">🚀 Enterprise CloudOps Production App running on AKS!</h1>
            <p style="font-size:1.2em; color:#333;">Continuous Integration & Deployment Pipeline Successful.</p>
            <div style="background:#f4f4f4; padding:15px; display:inline-block; border-radius:5px; border:1px solid #ccc;">
                <strong>System Status:</strong> <span style="color:green; font-weight:bold;">HEALTHY ✅</span>
            </div>
            <br/><br/>
            <a href="/break" style="background-color:#d9534f; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-weight:bold;">Trigger Chaos Test (/break)</a>
        </div>
    `);
});

app.get('/break', (req, res) => {
    console.log("CRITICAL ERROR: Chaos endpoint triggered. Simulating an app crash...");
    res.send('<h1 style="color:red; text-align:center; margin-top:15%;">💥 App Process Terminated. Watch Kubernetes self-heal this pod!</h1>');
    setTimeout(() => {
        process.exit(1);
    }, 2000);
});

app.listen(PORT, () => {
    console.log(`Application is live and listening on port ${PORT}`);
});
