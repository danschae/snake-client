const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connection', () => {
    console.log("Succesfully connected to game server!")
  });

  conn.on('data', () => {
    conn.write("Name: DJS")
  })

  conn.on('data', () => {
    console.log("you ded cuz you idled");
    console.log("it's got a sharp tongue this server!")
  });

  return conn;
}

module.exports = connect;