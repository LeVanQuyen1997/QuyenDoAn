const mongoose=require('mongoose');
const catelogySchema=new mongoose.Schema({
    groupCateID:String,
    content:String,
    name:String
});
const catelogy=mongoose.model('catelogy',catelogySchema);
module.exports=catelogy;