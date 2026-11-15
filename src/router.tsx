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
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "home",
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