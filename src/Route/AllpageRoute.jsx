import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";
import ContactUs from "../components/ContactUs";
import Faq from "../components/Faq";
export default function AllpageRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}
