// src/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductListPage from "../pages/Product/ProductListPage";
import ProductDetailPage from "../pages/Product/ProductDetailPage";
import AboutPage from "../pages/About/AboutPage";
import PrivacyPolicyPage from "../pages/Policy/PrivacyPolicyPage";
import ContactPage from "../pages/Contact/ContactPage";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter basename="/real-review">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
