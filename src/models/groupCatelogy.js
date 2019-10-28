const mongoose=require('mongoose');
const groupCateSchema=new mongoose.Schema({
    storeID:String,
    name:String
});
const groupCate=mongoose.model('groupCate',groupCateSchema);
module.exports=groupCate;