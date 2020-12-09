import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const FormYup=()=> {
    
    const formok = useFormik({
        initialValues:{
            name: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .optional('optional'),
              password: Yup.string()
              .max(20,"must be 20 letter")
              .required('required')
        })
        ,
        onSubmit:values => {
            console.log("submit", values)
        }
    })
    
    return(
        <div>
            <form onSubmit={formok.handleSubmit}>
    {formok.errors.name && formok.touched.name ? <span style={{color:"red", fontWeight: "bold"}}>{formok.errors.name}</span>:null}
            <input 
            type="name"
            id="name"
            {...formok.getFieldProps('name')}
            />
            {formok.touched.password && formok.errors.password? <span style={{color:"red", fontWeight: "bold"}}>{formok.errors.password}</span>  :null}
            <input 
            type="password"
            id="password"
            {...formok.getFieldProps("password")}
            />

            <input type="submit" value="submit"/>
            </form>
        </div>
    )
}