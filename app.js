const http = require('http');
const fs = require('fs');
const path = require('path');

// список ХЕДЕРОВ
const mineTypes = require('./utilities/main');
const staticFile = require('./utilities/static_file');

const PORT = 3000;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/':
            console.log('main');
            staticFile(res, '/index.html', '.html');
            break;

        default:
            const extname = String(path.extname(url).toLocaleLowerCase());
            if (extname in mineTypes) {
                staticFile(res, url, extname);
            } else {
                res.statusCode = 404;
                staticFile(res, '/404.html', '.html');
            }
            break;
    }
}).listen(PORT);
