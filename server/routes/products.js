import express from "express";
import { getproducts,addproduct } from "../controllers/products.js";


const router =express.Router();

router.get('/',getproducts);
router.post('/',addproduct);

export default router;