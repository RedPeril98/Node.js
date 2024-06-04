const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const usersFilePath = './users.json';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.get('/users', (req, res) => {
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const users = JSON.parse(data);
        res.json(users);
    });
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const users = JSON.parse(data);
        const user = users.find(user => user.id === parseInt(userId));
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User Not Found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});