import * as yup from "yup";
  export const addproductSchema = yup.object().shape({
    productname: yup.string().required("required"),
    productprice: yup.number().positive().integer().required("required"),
    productquantity: yup.number().positive().integer().required("required"),
    productcateogry: yup.string().required("required"),
    productseller: yup.string().required("required"),
 
  });