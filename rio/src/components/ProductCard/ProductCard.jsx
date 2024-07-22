import React from 'react';
import './ProductCard.css';
import photo from  '../../img/4.jpg';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={photo} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <p>{product.work}</p> 
      <p>{product.pack}</p>
      <p>{product.fix}</p>
      <p>
      · Обсуждение заказа
        <br />
      · Утверждение заказа
      <br />
      · Предоставление наработок
      <br />
      · Утверждение / Внесение правок
      <br />
      · Оплата заказа
      <br />
      · Отправка готового заказа
      </p>
    </div>
  );
};

export default ProductCard;