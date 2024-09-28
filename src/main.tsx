import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { ClerkProvider } from "@clerk/clerk-react";
import RootLayout from "./Components/RootLayout"; // Import the new layout component
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/app/signup",
    element: <SignUpPage />,
  },
  {
    path: "/app/signin",
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
        signUpForceRedirectUrl="/app"
      >
        <RouterProvider router={router} />
      </ClerkProvider>
    </QueryClientProvider>
  </StrictMode>
);
