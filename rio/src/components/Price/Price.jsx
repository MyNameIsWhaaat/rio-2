import React from 'react'; 
import './Price.css';
import { Element } from 'react-scroll';
import Products from '../ProductList/ProductList';

function Price() {
  return (
    <Element name="price" className="section" id="PriceId">
      <div id='PriceId' className="mainPrice">
        <Products />
      </div>
    </Element>
  );
}

export default Price;