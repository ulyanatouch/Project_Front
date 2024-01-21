import React, { useEffect, useState } from "react";
import { fetchProductById} from "../../requests";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(() => {
    fetchProductById(id, setProduct);
  }, []);

  return <div>{product.title}</div>; 
};

export { SingleProductPage };
