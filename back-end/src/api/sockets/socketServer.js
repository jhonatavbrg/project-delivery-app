const socket = require('socket.io');
const http = require('http');
const app = require('../app');
const status = require('./status');

const upServer = () => {
  const serverApp = http.createServer(app);

  const io = socket(serverApp,
  { cors: { origin: 'http://localhost:3000',
  methods: ['GET'] } });
  status(io);
  serverApp.listen(() => {
    console.log('usuario entrou');
  });
};

module.exports = upServer;
