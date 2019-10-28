const express=require('express');
const router=express.Router();
const Catelogy= require('./../models/catelogy');
router.get('/',async(req,res)=>{
    const catelogy=await Catelogy.find();
    res.json(catelogy);
});

router.post('/',async(req,res)=>{
    const {groupCateID,content,name}=req.body;
    const catelogy=new Catelogy({groupCateID,content,name});
    await catelogy.save().then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});


router.put('/:id',async(req,res)=>{
    const {groupCateID,content,name}=req.body;
    const catelogy={groupCateID,content,name};
    await Catelogy.findByIdAndUpdate(req.params.id,catelogy).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});

router.delete('/:id', async(req,res)=>{
    await Catelogy.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });
    
});
module.exports=router;