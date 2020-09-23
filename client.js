const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Succesfully connected to game server!");
    conn.write("Name: DJS");
  });


  conn.on('data', (data) => {
    console.log(data);
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: down");
  });

  return conn;
}

module.exports = {connect};