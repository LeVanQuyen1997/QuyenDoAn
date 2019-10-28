const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    cateID:String,
    name:String,
    oldPrice:Number,
    newPrice:Number,
    rating:Number,
    status:Boolean,
    inventory:Number,
    img:String
});
const product=mongoose.model('product',productSchema);
module.exports=product