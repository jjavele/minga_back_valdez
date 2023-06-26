import {Router} from 'express'
import read from '../controllers/auths/read.js'

const auth_router = Router()

//auth_router.post()       //POST: para crear un auth
auth_router.get('/', read)        //GET: para leer (TODOS o SOLO UNO) authes
//auth_router.put()        //PUT: para actualizar un auth
//auth_router.delete()     //DELETE: para eliminar un auth

export default auth_router