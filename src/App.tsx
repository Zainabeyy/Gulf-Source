import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Layout from "./components/Layout";
import Vision from "./pages/Vision";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsServices = lazy(() => import('./pages/Products-Services'));
const ProductsServicesDetailPage = lazy(() => import('./pages/ProductServicesDetailPage'));
const Certifications = lazy(() => import('./pages/Certifications'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}
