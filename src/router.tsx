import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/404";
import Partners from "./pages/Partners";
import ComingSoon from "./pages/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/", // Changed from '' to '/' for clarity
    element: <App />,
    children: [
      {
        index: true, // This makes Home render when you visit http://localhost:5174/
        element: <Home />
      },
      {
        path: "home", // Removed leading slash
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "partners",
        element: <Partners />
      },
      {
        path: "coming-soon",
        element: <ComingSoon />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);