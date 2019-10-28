const express=require('express');
const router=express.Router();
const Product=require('./../models/product');

router.get('/', async(req,res)=>{
    const product=await Product.find();
    res.json(product);
});
router.post('/',async (req,res)=>{
    const {cateID,name,oldPrice,newPrice,rating,status,inventory,img}=req.body;
    const product=new Product({cateID,name,oldPrice,newPrice,rating,status,inventory,img});
    await product.save();
    res.json('received');
});
router.put('/:id',async(req,res)=>{
    const {cateID,name,oldPrice,newPrice,rating,status,inventory,img}=req.body;
    const newProduct={cateID,name,oldPrice,newPrice,rating,status,inventory,img};
    await Product.findByIdAndUpdate(req.params.id,newProduct);
    res.json({status:'Product Save'});
});
router.delete('/:id',async(req,res)=>{
    await Product.findByIdAndRemove(req.params.id);
    res.json({
        status:'Product Deleted'
    })
});

router.get('/:id',async(req,res)=>{
    await Product.findById(req.params.id).then(result=>{
        res.json({
            status:'Product Finded'
        })
    }).catch(err=>{
        res.json({
            status:'Product Finded111'
        })
    });
    
});
router.get('/find/:cateID',async(req,res)=>{
    const product =await Product.find({cateID:req.params.cateID})
    res.json(product);
});

module.exports=router;