import React from 'react'; 
import './Price.css';
import { Element } from 'react-scroll';
import Products from '../ProductList/ProductList';

function Price() {
  return (
    <Element name="price" className="mainPrice" id="PriceId">
      <p className="priceText">Прайс</p>
      <div id='PriceId' className="mainPrice">
        <Products />
      </div>
    </Element>
  );
}

export default Price;