import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";

export default function App() {
  return (
    <div className="min-h-screen h-full flex flex-col w-full">
      <Header />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="*"
            element={<div className="text-center">404 NOT FOUND</div>}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
