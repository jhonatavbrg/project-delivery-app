const { sale } = require('../../database/models');

const handleOrderStatus = (io) => io.on('connection', (socket) => {
  console.log('funcionou');
  socket.on('updateStatus', async ({ status, saleId }) => {
    socket.emit('teste', 'Funcionou');
    await sale.update({ status }, { where: { id: saleId } });
    io.emit('updateStatus', { status, saleId });
  });
});

module.exports = handleOrderStatus;
