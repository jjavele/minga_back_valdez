import {Router} from 'express'
import read from '../controllers/mangas/read.js'

const manga_router = Router()

//manga_router.post()       //POST: para crear un manga
manga_router.get('/', read) //GET: para leer (TODOS o SOLO UNO) mangaes
//manga_router.put()        //PUT: para actualizar un manga
//manga_router.delete()     //DELETE: para eliminar un manga

export default manga_router