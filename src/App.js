import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import Error404 from "./pages/Error404";
import LayoutDefault from "./Layout/LayoutDefault";
import ScrollToTop from "./pages/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
