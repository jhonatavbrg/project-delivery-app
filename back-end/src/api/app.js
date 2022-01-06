const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');
const products = require('./routes/products');

const app = express();
app.use(cors());

const registerRouter = require('./routes/register');

app.use(express.json());

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.get('/customer', products);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
