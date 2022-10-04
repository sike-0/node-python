const express = require('express');
const app = express();
const { exec } = require('child_process')

const PORT = 3000;

app.use(express.static('public'));

app.get('/make', (req, res) => {
    exec('python3 maker.py', () => { })
    res.end()
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));