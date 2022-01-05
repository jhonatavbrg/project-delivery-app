const express = require('express');

const app = express();

const registerRouter = require('./routes/register');

app.use(express.json());

app.use('/register', registerRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
