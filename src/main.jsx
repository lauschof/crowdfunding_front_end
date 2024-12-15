import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CreateProject from "./pages/CreateProject.jsx"

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx"; 
import { AuthProvider } from "./components/AuthProvider.jsx";

import './components/NavBar.css';
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
          { path: "/", element: <HomePage /> },
          { path: "/login", element: <LoginPage /> },
          { path: "/projects/:id", element: <ProjectPage /> },
          { path: "/signup", element: <SignupPage /> },
          { path: "/createproject", element: <CreateProject />}
      ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     {/* Here we wrap our app in the router provider so they render */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);