import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ProductsServices from "./pages/Products-Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products-Services" element={<ProductsServices/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
