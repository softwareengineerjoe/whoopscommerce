import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }),
    [];

  if (products.length === 0)
    return <div className="text-center">Loading....</div>;

  return (
    <div>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">
          {name}
        </h1>
      </div>
      <ProductCard products={products} />;
    </div>
  );
};

export default CategoryProducts;
