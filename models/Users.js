import {Schema, model} from 'mongoose'
//cluster: conjunto de base de datos (el link de mongo qe obtienen es del cluster)
//bd: conjunto de colecciones (colección haace referencia recurso y recurso hace referencia a los modelos de datos que necesita mi aplicación)
//colección: conjunto de documentos
//por ejemplo, colecciones: usuarios, capítulos, productos, carrtos.
//documento: al dato
//el array de eventos que se fetcheaba en amazing-events me traía toda la colección de eventos.
//cada objeto de ese array era un documento de la colección.

let collection = 'users' // los nombres de las colecciones van siempre en plural (porque son un conjunto de)
//van siempre en inglés
//tienen que ser descriptivos del recurso
//recurso "category" => colección "categories"
//recurso "author" => colección "authors"
let schema = new Schema({                                    //defino el primer objeto con las propiedades necesarias para el modelo
    email: {type:String, required:true},
    password: {type:String, required:true},
    photo: {type:String, required:true}, //por ahora una URL
    role: {type:Number, required:true},
    online: {type:Boolean},
    verified: {type:Boolean, required:true},
    verify_code: {type:String, required:true}
},{                                                          //timestamps  
    timestamps:true
})

let User = model(collection,schema)
export default User