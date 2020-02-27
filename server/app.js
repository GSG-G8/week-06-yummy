const express = require('express');
const { join } = require('path');
const router = require('./controller');
const { clientError, serverError } = require('./controller/error');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 5000);

app.use(router);
app.use(clientError);
app.use(serverError);

module.exports = app;
