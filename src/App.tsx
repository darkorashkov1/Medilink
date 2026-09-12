import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/Services";

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