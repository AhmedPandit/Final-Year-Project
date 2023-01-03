
import ProductDetail from "../models/productdetails.js"; 
export const getproducts = async (req,res)=>{
    try{
        const products=await ProductDetail.find();
    }

    catch(error){
        res.status(404).json({message:error.message});
    }
}
export const addproduct=async (req,res)=>{
    const product=req.body;
    const newProduct=new ProductDetail(product);
    try{
        await newProduct.save();
        res.status(201).json(newProduct)

    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}