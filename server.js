const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

const users = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required.');
    }
    if (users.find(u => u.email === email)) {
        return res.status(409).send('Email already registered.');
    }
    users.push({ username, email, password });
    res.send('Sign up successful! Welcome, ' + username + '!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
