import mongoose from "mongoose";

const productdetailsSchema=mongoose.Schema({

    productname:{
        type:String,
        required:true,
        trim:true,
        maxLength:100,
    },
    productprice:{
        type:Number,
        required:true,
        default:0.0
    },
    productdescription:{
        type:String,
        required:true,
    },
    productstock:{
        type:Number,
        required:true,
        default:0
    },
    productimages:{
        type:[String],
        required:true,
    },
    productcategory:{
        type:String,
        // required:true,
        enum:{
            values:[
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
            ]
        }
    },
    productseller:{
        type: String,
        // required:true,

    },
 
  
    rating:{
        type:Number,
        default:0,
    },
    numberofreview:{
        type:Number,
        default:0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }

        }
    ]
     
});

const ProductDetail=mongoose.model("ProductDetail",productdetailsSchema);
export default ProductDetail;