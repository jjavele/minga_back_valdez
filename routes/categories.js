import {Router} from 'express'
import read from '../controllers/categories/read.js'

const category_router = Router()

//category_router.post()       //POST: para crear un category
category_router.get('/',read)        //GET: para leer (TODOS o SOLO UNO) categoryes
//category_router.put()        //PUT: para actualizar un category
//category_router.delete()     //DELETE: para eliminar un category

export default category_router