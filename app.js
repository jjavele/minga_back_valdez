import 'dotenv/config.js';                 //configura las variables de enterono de la aplicación
console.log(process.env.LINK_DB)
import './config/db.js';
//import createError from'http-errors';    //módulo necesario para crear/configurar errores en nuestro servidor (NO LO VAMOS A UTILIZAR)
import express from 'express';             //módulo necesario para levantar y configurrar un servidor
import path from 'path';                   //módulo necesario para conocer la ubicación de nuestro servidor
//import cookieParser from'cookie-parser'; //módulo para configurar cookies (NO VAMOS A MANEJAR COOKIES)
import logger from 'morgan';               //módulo ára registrar las peticiones que se realizan al servidor
import cors from 'cors'                    //módulo para permitir orígenes cruzados (front con el back)
import {__dirname} from './utils.js';

import indexRouter from './routes/index.js';  //enrutador principal de la aplicación

let app = express();                      //defino una variable con la ejecucoón del módulo de express para poder CREAR un servidor

// view engine setup
//set es un método que CONFIGURA algo
app.set('views', path.join(__dirname, 'views')); //configuro que las vistas generadas en el backend están en la carpeta VIEWS
app.set('view engine', 'ejs');                   //configuro que las vistas se van a definir con el lenguaje EJS (motor de planilla)

//MIDDLEWARES
//con funciones que se ejecutan con cada petición y que van a permitir/no permitir realizar algo
//"use" es un método que bolica (en este caso) a mi aplicación a usar algo(ejecutar una función)
app.use(logger('dev'));                                   //oblica al servidor a usar el middleware de registro de peticiones
app.use(express.json());                                  //obliga al servidor a transformar/manejar formato json (mas que todo para peticiones post/put)
app.use(express.urlencoded({ extended: false }));         //oblica al servidor a acceder a consultas complejas (permite leer queries y params de una petición)         
//app.use(cookieParser());                                //como recomendación lo borramos (NO VAMOS A MANEJAR COOKIES)
app.use(express.static(path.join(__dirname, 'public')));  //obliga al servidor a generar una carpeta de acceso público al cliente
app.use(cors());                                          //obliga al servidor a permitir el cruce de orígenes de front/back

//ENPOINTS
app.use('/api', indexRouter);                             //obliga al servidor a usar las rutas definidas en el enrutador principal con la palabrita "/api"

export default app;

// app.use('/users', usersRouter);   //SE BORRA

//SE BORRA TODO LO SIGUIENTE
//SE BORRA TODO LO SIGUIENTE
//SE BORRA TODO LO SIGUIENTE
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/