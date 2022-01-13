const socket = require('socket.io');
const http = require('http');
const app = require('../app');
const status = require('./status');

const port = process.env.SOCKET_PORT || 3002;

const upServer = () => {
  const serverApp = http.createServer(app);

  const io = socket(
    serverApp,
    { 
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET'], 
      }, 
    },
  );
  
  status(io);

  serverApp.listen(port, () => {
    console.log('usuario entrou');
  });
};

module.exports = upServer;
