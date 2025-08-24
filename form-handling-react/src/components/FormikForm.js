import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert("Formik form submitted: " + JSON.stringify(values));
      }}
    >
      <Form>
        <h2>Formik Form</h2>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />
        <br />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
