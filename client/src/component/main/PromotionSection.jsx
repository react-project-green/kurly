import React from 'react';
import MainPromotionTitle from './MainPromotionTitle.jsx';
import MainProductListSlider from './MainProductListSlider.jsx';

export default function PromotionSection() {
  return (
    <div className='main_setion'>
      <MainPromotionTitle />
      <MainProductListSlider />
    </div>
  );
}

