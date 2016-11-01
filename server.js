const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const tv_show_router = require('./tvShow/tvShowRouter');

const app = express();
const APP_PORT = 3000;

app.use(morgan('dev'));
app.use(body_parser.json());

app.get('/', (request, response) => response.send('Hello world'));

app.use('/tvshow', tv_show_router);
// app.get('/tvshow/{id}', (request, response) => response.send('Hello world'));
// app.post('/tvshow', (request, response) => response.send('Hello world'));
// app.put('/tvshow/{id}', (request, response) => response.send('Hello world'));
// app.delete('/tvshow/{id}', (request, response) => response.send('Hello world'));


app.listen(APP_PORT, () => {
    console.log(`Example app listening port: ${APP_PORT}`);
});
