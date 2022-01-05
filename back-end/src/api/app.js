const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');

const app = express();
app.use(cors());

const registerRouter = require('./routes/register');

app.use(express.json());

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
