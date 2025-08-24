import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // lowercase f because file is formikForm.js
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RegistrationForm />
        <hr />
        <FormikForm />
        <hr />
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}
