import express from 'express';
import author_router from './authors.js'
import category_router from './categories.js'
import manga_router from './mangas.js'
import chapter_router from './chapters.js'
import auth_router from './users.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/authors', author_router)       //obligo al enrutador principal a usar la ruta de authors con la palabrita /authors
router.use('/categories', category_router)  //obligo al enrutador principal a usar la ruta de categories con la palabrita /categories
router.use('/mangas', manga_router)         //obligo al enrutador principal a usar la ruta de manga con la palabrita /manga
router.use('/chapters', chapter_router)       //obligo al enrutador principal a usar la ruta de chapters con la palabrita /chapters
router.use('/users', auth_router)          //obligo al enrutador principal a usar la ruta de users con la palabrita /users


export default router
