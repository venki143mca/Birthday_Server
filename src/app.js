const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const { routes } = require('./routes');


const app = express();
app.use(cors());
const server = http.createServer(app);

function startServer() {
    server.listen('9090', 'localhost', () => {
        console.log('server started');
    });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);
setImmediate(startServer);

module.exports = app;
exports = module.exports;