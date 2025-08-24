import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        alert("Formik Registered: " + JSON.stringify(values));
      }}
    >
      <Form>
        <h2>Formik Registration Form</h2>
        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />
        </div>
        <div>
          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="p"
            style={{ color: "red" }}
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
