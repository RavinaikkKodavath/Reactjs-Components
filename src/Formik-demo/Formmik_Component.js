// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const Formmik_Component = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Required"),
//     email: Yup.string().email("Invalid email address").required("Required"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .required("Required"),
//   });

//   const onSubmit = (values) => {
//     // Handle form submission here
//     console.log("Form submitted with values:", values);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       <h2>this is formik form validation using yup validation library</h2>
//       {(props) => (
//         <Form>
//           <dl>
//             <dt className="form-control">Name</dt>
//             <dd>
//               <Field type="text"  name="name" />
//             </dd>
//             <dd className="text-danger">
//               {" "}
//               <ErrorMessage name="name"  />
//             </dd>

//             <dt className="form-control">Email</dt>
//             <dd>
//               {" "}
//               <Field type="text" name="email" />
//             </dd>
//             <dd className="text-danger">
//               {" "}
//               <ErrorMessage name="email" />
//             </dd>

//             <dt className="form-control">Password</dt>
//             <dd>
//               {" "}
//               <Field type="password" name="password" />
//             </dd>
//             <dd className="text-danger">
//               {" "}
//               <ErrorMessage name="password" />
//             </dd>
//           </dl>

//           <button className="btn btn-primary" disabled={!props.isValid}>
//             Register
//           </button>

//           <button className="btn btn-danger" disabled={!props.dirty}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Formmik_Component;


// MyForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Formmik_Component = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    city:''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    city:Yup.string().required('please select city')
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log('Form submitted with values:', values);
  };

  return (
    <div className='container-fluid w-50'>
      <br></br>
             <h2 style={{color:'red'}}>This is formik form Component with validation using yup validation library</h2>
 <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
     { props =>
      <Form>
        <dl>
          <dt >
            Name:
          </dt>
          <dd><Field type="text" name="name" className="form-control" /></dd>
         <dd><ErrorMessage name="name"  className="text-danger" /></dd> 
   

          <dt>
            Email:
          </dt>
          <dd><Field type="email"  name="email" className="form-control" /></dd>
         <dd><ErrorMessage name="email"  className="text-danger" /></dd> 
   
          <dt>
            Password:
          </dt>
          <dd><Field type="text" name="password" className="form-control" /></dd>
         <dd> <ErrorMessage name="password"  className="text-danger" /></dd>


         <dt>
            City:
          </dt>
          <dd><Field as="select" name="city" className="form-control" >
          <option>Choose City</option>
         <option>Hyderabad</option>
         <option>Delhi</option>
         </Field> </dd>
         <dd> <ErrorMessage name="city"  className="text-danger" />
       

         </dd>

                   <button className="btn btn-primary" disabled={!props.isValid}>
           Register
           </button>

         <button className="btn btn-danger" disabled={!props.dirty}>             Submit
          </button>
          </dl>
      </Form>
     }
      
    </Formik>
    </div>
   
  );
};

export default Formmik_Component;
