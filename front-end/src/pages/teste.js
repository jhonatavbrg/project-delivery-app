import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';

function Teste() {
  const [string, setString] = useState('');

  useEffect(() => {
    const socket = socketClient('http://localhost:3002');
    socket.on('teste', (value) => setString(value));
  }, []);

  return (
    <div>
      <p>{ string }</p>
    </div>
  );
}

export default Teste;
