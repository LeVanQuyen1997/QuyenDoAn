const express=require('express');
const router=express.Router();
const Account=require('./../models/account');

router.get('/',async(req,res)=>{
    const account=await Account.find();
    res.json(account);
});
router.post('/',async(req,res)=>{
    const {username,password,types,status}=req.body;
    const account=new Account({username,password,types,status});
    await account.save();
    res.json({status:'Account Added'});
});
router.put('/:id',(req,res)=>{
    const {username,password,types,status}=req.body;
    console.log(req.params.id);
    const newAccount=new Account({username,password,types,status});
    Account.findByIdAndUpdate(req.params.id,newAccount);
    res.json({
        status:'Account Updated'
    });
});

router.delete('/:id',async(req,res)=>{
    await Account.findByIdAndRemove(req.params.id);
    res.json({
        status:'Account Deleted'
    });
});

router.get('/:id',async(req,res)=>{
    const account=await Account.findById(req.params.id);
    res.json(account);
});

module.exports=router;