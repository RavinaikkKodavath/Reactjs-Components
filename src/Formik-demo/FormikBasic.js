import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container-fluid w-50">
        <h2>this is a formik form without validation</h2>
    <form onSubmit={formik.handleSubmit} className="form-control">
      <dl>
        <dt className="text-danger">First Name</dt>
        <dd>
          <input
            id="firstName"
            name="firstName"
            type="text"
            {...formik.getFieldProps('firstName')} //this is a inbuilt event handled provided by formik
            // onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </dd>

        <dt className="text-danger">Last Name</dt>

        <dd>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </dd>

        <dt className="text-danger">Email Address</dt>
        <dd>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </dd>
      </dl>

      <button type="submit">Submit</button>
    </form>
    </div>

  );
};

export default SignupForm;
