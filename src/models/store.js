const mongoose=require('mongoose');
const storeSchema=new mongoose.Schema({
   nameStore:String,
   accountID:String
});
const store=mongoose.model('store',storeSchema);
module.exports=store;