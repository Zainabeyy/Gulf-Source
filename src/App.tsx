import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ProductsServices from "./pages/Products-Services";
import Vision from "./pages/Vision";
import Certifications from "./components/Certifications";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Products-Services" element={<ProductsServices/>} />
          <Route path="vision" element={<Vision/>} />
          <Route path="certifications" element={<Certifications/>} />
          <Route path="contact-us" element={<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
