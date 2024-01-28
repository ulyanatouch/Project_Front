export const fetchCards = async (setCards) => {
    try {
      const response = await fetch("http://localhost:3333/categories/all");
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export const fetchCategoriesById = async (id, setCategories) => {
    try {
      const response = await fetch(`http://localhost:3333/categories/${id}`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export const fetchProducts = async (setProducts) => {
    try {
      const response = await fetch("http://localhost:3333/products/all");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export const fetchProductById = async (id, setProduct) => {
    try {
      const response = await fetch(`http://localhost:3333/products/${id}`);
      const data = await response.json();
      setProduct(data[0]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };