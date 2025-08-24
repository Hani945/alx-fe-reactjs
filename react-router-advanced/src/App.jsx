import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
import PostsComponent from "./components/PostsComponent";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

function BlogPost({ id }) {
  return <h2>Blog Post ID: {id}</h2>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/formik" element={<FormikForm />} />
          <Route path="/posts" element={<PostsComponent />} />

          {/* ✅ Dynamic route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* ✅ Protected route */}
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <h2>Protected Content</h2>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
