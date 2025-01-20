import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ProductsServices from "./pages/Products-Services";
import Vision from "./pages/Vision";
import Certifications from "./pages/Certifications";
import ContactUs from "./pages/ContactUs";
import ProductsServicesDetailPage from "./pages/ProductServicesDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Products-Services" element={<ProductsServices />} />
          <Route path="Products-Services/:id" element={<ProductsServicesDetailPage />} />
          <Route path="vision" element={<Vision />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
