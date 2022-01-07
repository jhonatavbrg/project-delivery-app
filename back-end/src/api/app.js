const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const products = require('./routes/products');
const images = require('./routes/images');

const app = express();
app.use(cors());

const registerRouter = require('./routes/register');

app.use(express.json());

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.use('/customer', products);

app.use('/images', images);

app.use('/user', userRouter);

app.use(express.static(`${__dirname}/../public/images`)); 

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
