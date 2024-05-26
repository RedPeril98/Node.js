// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
const fs = require('fs');

// Переменные для счетчиков просмотров страниц
let homePageViews = 0;
let aboutPageViews = 0;

// Создаем HTTP сервер
const server = http.createServer((req, res) => {
      console.log('Запрос получен')
    if (req.url === '/') {
        homePageViews++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`<h1>Home Page</h1><p>Views: ${homePageViews}</p>`);
    } 

    else if (req.url === '/about') {
        aboutPageViews++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`<h1>About Page</h1><p>Views: ${aboutPageViews}</p>`);
    }
    else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});