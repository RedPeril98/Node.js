const express = require('express');
const fs = require('fs');

const app = express();

// Функция для чтения счетчика из файла
const readCounter = () => {
    try {
        const data = fs.readFileSync('counter.txt', 'utf8');
        return parseInt(data);
    } catch (err) {
        console.error(err);
        return 0;
    }
};

// Функция для записи счетчика в файл
const writeCounter = (counter) => {
    try {
        fs.writeFileSync('counter.txt', counter.toString(), 'utf8');
    } catch (err) {
        console.error(err);
    }
};

// Обработчик для главной страницы
app.get('/', (req, res) => {
    let counter = readCounter();
    counter++;
    writeCounter(counter);
    res.send(`<h1>Home Page</h1><p>Views: ${counter}</p><a href="/about">Go to About Page</a>`);
});

// Обработчик для страницы "О нас"
app.get('/about', (req, res) => {
    let counter = readCounter();
    counter++;
    writeCounter(counter);
    res.send(`<h1>About Page</h1><p>Views: ${counter}</p><a href="/">Go to Home Page</a>`);
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});