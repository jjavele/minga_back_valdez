import {Router} from 'express'
import read from '../controllers/authors/read.js'

const author_router = Router()

//author_router.post()       //POST: para crear un author
author_router.get('/',read)  //GET: para leer (TODOS o SOLO UNO) authores    
//author_router.put()        //PUT: para actualizar un author
//author_router.delete()     //DELETE: para eliminar un author

export default author_router
