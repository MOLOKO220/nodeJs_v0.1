const mineTypes = require('./main');
const fs = require('fs');

function staticFile(res, filePath, ext) {
    // передаем хедер с правельныи разширениям файла
    res.setHeader('Content-type', mineTypes[ext]);
    // асинхронная запись файла
    fs.readFile('./public' + filePath, (error, data) => {
        if (error) {
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    });
}

module.exports = staticFile;
