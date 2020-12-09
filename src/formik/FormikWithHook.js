import React from 'react';
import { useFormik } from 'formik';



export const FormWithHook =() => {
  

    const form = useFormik({
        initialValues:{
            name: "",
            email: ""
        },
        onSubmit:values => {
            console.log(values)
        },
        validate:values=>{
            let errors = {};
            if(!values.name){
                errors.name="name must required"
            }else if(values.name.length < 4){
                errors.name="name must be 4 characters"
            }
            return errors
        }
    })

    return(
        <div>
            <form onSubmit={form.handleSubmit}>
                 
                <input 
                type="name"
                name= "name"
                value={form.values.name}
                onChange={form.handleChange}
                />
                {form.handleBlur && form.errors.name ? <span style={{color: "red", fontWeight:"bold"}}>{form.errors.name}</span>: null}
                <input 
                type="email"
                name= "email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur ={form.handleBlur}
                />
                <input
                  type="submit"
                  value="submit"
                />
            </form>
        </div>
    )
}