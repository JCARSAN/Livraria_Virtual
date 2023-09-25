import mongoose from "mongoose";
import crypto from "crypto";

const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const address = new Schema({
    street:{type:String,required:true},
    number:{type:String,required:true},
    complement:{type:String,required:true},
    neighborhood:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true},
    zipCode:{type:String,required:true}
});

const desireBook = new Schema({
    bookId:{type:String,required:true},
    bookTitle:{type:String,required:true},
    bookPrice:{type:Number,required:true},
    bookImg:{type:String,default:'img_not_found.png'},
});

const clientSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    deliveryAddress:{type:[address],required:true},
    desireList:[desireBook],
    hash:String,
    salt:String,
    img:{type:String, default:'client_img_not_found.png'},
});

clientSchema.methods.getSalt = ():String => {
    return crypto.randomBytes(16).toString('hex');
}

clientSchema.methods.getHash = (password:Float64Array,salt:Float32Array) => {
    return crypto.pbkdf2Sync(password,salt,1000,64, 'sha512').toString('hex');
}

interface Client{
    _id:String,
    name:String,
    email:String,
}

clientSchema.methods.generateToken = (client:Client) => {
   const expiry = new Date();
   expiry.setDate(expiry.getDate() + 7);
   return jwt.sign({
    _id:client._id,
    email:client.email,
    name:client.name,
    exp: expiry.getTime()
   },process.env.JWT_SECRET)
}

module.exports = mongoose.model('Client',clientSchema);