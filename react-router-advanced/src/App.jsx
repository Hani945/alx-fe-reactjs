// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/formikForm";
import PostsComponent from "./components/PostsComponent";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<h1>Home Page</h1>} />

        {/* Task 0: Formik Registration */}
        <Route path="/register" element={<RegistrationForm />} />

        {/* Task 1: Data fetching with React Query */}
        <Route path="/posts" element={<PostsComponent />} />

        {/* Task 2: Dynamic blog route */}
        <Route path="/blog/:id" element={<h2>Blog Post</h2>} />

        {/* Task 2: Protected Profile route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <h2>Profile Page (Protected)</h2>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
