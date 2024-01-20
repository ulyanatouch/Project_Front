import "./App.scss";
import { Header } from "./Layout/Header/Header";
import { Footer } from "./Layout/Footer/Footer";
import { Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import SalesPage from "./Components/SalesPage/SalesPage";
import { CategoriesPage } from "./Pages/CategoriesPage/CategoriesPage";
import { MainPage } from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/all-sales" element={<SalesPage />} />
        <Route path="/all-products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
