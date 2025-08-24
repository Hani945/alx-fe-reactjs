import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form data", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form data-testid="formikForm">
          <div>
            <label>Username</label>
            <Field name="username" type="text" value={initialValues.username} />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" value={initialValues.email} />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" value={initialValues.password} />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
