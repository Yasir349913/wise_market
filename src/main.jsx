import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Faq from "./components/Faq.jsx";
import Returnprivacy from "./components/Returnprivacy.jsx";
import Termsandconditions from "./components/Termsandconditions.jsx";
import Cart from "./components/Cart.jsx";
import CategoryProducts from "./components/Categoryproducts.jsx"; // ✅ New import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "returnprivacy",
        element: <Returnprivacy />,
      },
      {
        path: "termsandconditions",
        element: <Termsandconditions />,
      },
      {
        path: "category/:category", // ✅ New route for category
        element: <CategoryProducts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
