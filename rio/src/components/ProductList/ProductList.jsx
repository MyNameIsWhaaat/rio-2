import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import productsData from '../../data/data.json';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Здесь можно загрузить данные из внешнего API, если нужно
    setProducts(productsData);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;