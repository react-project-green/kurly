import React from 'react';
import ProductList from '../../pages/ProductList.jsx';
import MainProductList from './MainProductList.jsx';

export default function MainProductListSlider() {
  return (
    <div className='section_product'>
      <div>
      </div>
      <MainProductList />
      <button type='button' className='section_pro_l_btn'></button>    
      <button type='button' className='section_pro_r_btn'></button>    
    </div>
  );
}

