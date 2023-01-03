import React from 'react'
import {Formik} from "formik";
import { addproductSchema } from './schema';
import "./styles.css";
import { Editor } from '../../components';


const Addproduct = () => {

  const handleFormSubmit = (actions,values) => {
    console.log(values);
    actions.reset();
  };
  
  const initialValues=
    {
     
         productname:"",
         productprice:"",
         productquantity:"",
         productcateogry:"",
         productseller:"",
         productimages:""
     
    }
  
  return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={addproductSchema}
    >
        {({
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off"> 
          <label htmlFor='productname'>Product Name</label>
          <input
          value={values.productname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your Product Name"
          id="productname"
          className={errors.productname && touched.productname ?"input-error":""}

          />
          {errors.productprice && touched.productname && <p className='error'>{errors.productname}</p>}
            <label htmlFor='productprice'>Product Price</label>
          <input
          value={values.productprice}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Product price"
          type="number"
          id="productprice"
          className={errors.productprice && touched.productname ?"input-error":""}
          />
            <label htmlFor='productname'>Product Quantity</label>
          <input
          value={values.productquantity}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number"
          placeholder="Enter Quantity"
          id="productquantity"
          className={errors.productquantity && touched.productquantity ?"input-error":""}
          />
            <label htmlFor='productname'>Product Name</label>
          <input
          value={values.productname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your Product Name"
          id="productname"
          />
            <label htmlFor='productname'>Product Name</label>
          <input
          value={values.productname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your Product Name"
          id="productname"
          />
            <label htmlFor='productname'>Product Name</label>
          <input
          value={values.productname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your Product Name"
          id="productname"
          />
          <Editor/>
          <button disabled={isSubmitting} type="submit" >Save</button>

    </form>
      
        )}
</Formik>

  )

}

export default Addproduct