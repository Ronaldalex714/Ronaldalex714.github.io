const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/launch', (req, res) => {
    const processPath = req.query.path;

    if (!processPath) {
        res.status(400).send('Process path is required.');
        return;
    }

    exec(`"${processPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error launching process: ${error.message}`);
            res.status(500).send('Failed to launch process.');
            return;
        }
        console.log(`Process launched: ${stdout}`);
        res.send('Process launched successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
