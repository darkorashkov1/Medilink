import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="pageFadeIn">
        <Outlet />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;