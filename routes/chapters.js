import {Router} from 'express'
import read from '../controllers/chapters/read.js'

const chapter_router = Router()

//chapter_router.post()       //POST: para crear un chapter
chapter_router.get('/', read) //GET: para leer (TODOS o SOLO UNO) chapteres
//chapter_router.put()        //PUT: para actualizar un chapter
//chapter_router.delete()     //DELETE: para eliminar un chapter

export default chapter_router