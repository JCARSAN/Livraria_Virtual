import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name:{type:String,required:true},
    biography: String
});

const reviewSchema =  new Schema({
    clientName:{type:String,default:"Anônimo"},
    title:{type:String,required:true},
    review:{type:String,required:true},
    rating:{type:Number,required:true}
})

const bookSchema = new Schema({
    title: {type:String,required:true},
    yearPublication: Number,
    synopsis:String,
    pages: Number,
    language:String,
    launch:{type:Boolean,default:false},
    highlight:{type:Boolean,default:false},
    price: {type:Number, required:true},
    ISBN: {type:String, required:true},
    publisher: {type:String, required:true},
    rating: {type:String, default: 0},
    category: {type:String,required:true},
    img:{type:String, default:'img_not_found.png'},
    author:{type:[authorSchema], required:true},
    reviews:[reviewSchema]
});

module.exports = mongoose.model('Book',bookSchema);