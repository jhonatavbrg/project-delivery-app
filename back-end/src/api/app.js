const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const products = require('./routes/products');
const sales = require('./routes/sale');
const socketServer = require('./sockets/socketServer');

const app = express();
app.use(cors());

const registerRouter = require('./routes/register');

app.use(express.json());

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.use('/customer', products);

app.use('/sales', sales);

app.use('/user', userRouter);

app.get('/', (_req, res) => res.status(200).end());

app.get('/coffee', (_req, res) => res.status(418).end());

socketServer();
module.exports = app;
