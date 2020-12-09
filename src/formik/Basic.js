import React from 'react';
import { Formik } from 'formik';

const Basic = () => {
    return(
     <Formik 
       initialValues={{name: "" , bio: " "}}
       
       onSubmit={ values => {
           console.log("Submit", values)
       }}
       validate={values=> {
           let errors={}
           if(!values.name){
               errors.name="name is required"
           }
           return errors
       }}
     >
             {({handleSubmit,errors, handleChange,values}) => (
                 <form onSubmit={handleSubmit}> 
                 <input type="text"value={values.name} name="name" onChange={handleChange} placeholder="enter name"/>
                 <textarea type="text" name="bio"onChange={handleChange} value={values.bio} placeholder="enter comment"/>
                 <input type="submit" name="submit"/>
                 {errors.name &&  
    <span style={{ color:"red", fontWeight: "bold" }}>  
    {errors.name}      
    </span>  

  }                  </form>       
             )}
         

     </Formik>
    )
}  
  
export default Basic;