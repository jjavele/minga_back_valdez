import {Schema,model,Types} from "mongoose"

let collection = 'chapters'
let schema = new Schema({
    manga_id: {
        type: Schema.Types.ObjectId,
        ref: 'mangas',
        required: true
    },
    title: {type:String, required:true},
    cover_photo: {type:String, required:true},
    pages: {type:Array, required:true},
    order: {type:String, required:true}
},{
    timestamps: true
})

const Chapter = model(collection, schema)
export default Chapter