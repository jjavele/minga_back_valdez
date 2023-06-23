#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js';                            //importa la aplicación de back configurada
import debug from 'debug';                              //importo el módulo para debuguear
import http from 'http';                                //importo el módulo para crear servidores

const logger = debug("back-48:server");                 //se configura el debugeador (ESTO YA NO SE UTILIZA)

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '8080');   //defino el puerto donde va a funcionar nuestro servidor
//defino un operador OR para normalizar el puerto porque cuando hostee/deployee el servidor el hosting me va a asignar el puerto que tenga libre para mi app
app.set('port', port);                                  //configura el puerto con la variable port definida anteriormente

/**
 * Create HTTP server.
 */

let server = http.createServer(app);                    //utilizo en módulo http para crear un servidor (con las configuraciones que se realizaron en app)

/**
 * Listen on provided port, on all network interfaces.
 */
function ready(){                                       //ready es una funcion que se va a ejecutar cuando se levante correctamente el servidor
  console.log("server ready on port " + port);
}
server.listen(port, ready);                             //se utiliza para escuchar un puerto y es el encargado de levantar efectivamente el servidor (con este método empieza a funcionar)
server.on('error', onError);                            //
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
