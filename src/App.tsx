import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { useCanonical } from "./hooks/useCanonical";

function App() {
  const { pathname } = useLocation();
  useCanonical();

  return (
    <>
      <Navbar />
      <main key={pathname} className="pageFadeIn">
        <Outlet />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;