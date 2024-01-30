import "./App.scss";
import { Header } from "./Layout/Header/Header";
import { Footer } from "./Layout/Footer/Footer";
import {Route, Routes } from "react-router-dom";
import {ProductsPage} from "./Components/ProductsPage/ProductsPage";
import {SalesPage} from "./Components/SalesPage/SalesPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import {Categories} from "./Components/Categories/Categories";
import { SingleProductPage } from "./Pages/SingleProductPage/SingleProductPage";
import { CategoriesPage } from "./Components/CategoriesPage/CategoriesPage";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
        <Route path="/all-sales" element={<SalesPage />} />
        <Route path="/all-products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
