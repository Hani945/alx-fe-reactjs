import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  // ✅ Validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // ✅ Initial values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // ✅ Handle submit
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form data-testid="formikForm">
            {/* Username field */}
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                value={values.username}   {/* ✅ value={username} */}
                onChange={handleChange}   {/* controlled */}
              />
              <ErrorMessage name="username" component="div" />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
