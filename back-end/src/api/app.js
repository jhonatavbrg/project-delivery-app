const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const products = require('./routes/products');
const sales = require('./routes/sale');
const images = require('./routes/images');
const socketServer = require('./sockets/socketServer');
const registerRouter = require('./routes/register');

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.static(`${__dirname}/../public/images`)); 

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.use('/customer', products);

app.use('/sales', sales);

app.use('/user', userRouter);

app.use('/images', images);

app.get('/', (_req, res) => res.status(200).end());

app.get('/coffee', (_req, res) => res.status(418).end());

socketServer();
module.exports = app;
