import React, { useEffect, useState } from "react";
import { SaleCard } from "../../Components/SaleCard/SaleCard";
import "./Sales.scss";

export const Sales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
      <div className="sales-block">
        <p>Sale</p>
      <div className="sales-cards">
        {products.slice(0, 4).map((product) => (
          <SaleCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
