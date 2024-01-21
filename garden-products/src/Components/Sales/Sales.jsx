import React, { useEffect, useState } from "react";
import { SaleCard } from "../../Components/SaleCard/SaleCard";
import "./Sales.scss";
import { fetchProducts } from "../../requests";

export const Sales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div className="sales-block">
      <p>Sale</p>
      <div className="sales-cards">
        {products.slice(0, 4).map((product) => (
          <SaleCard key={product.id} card={product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
