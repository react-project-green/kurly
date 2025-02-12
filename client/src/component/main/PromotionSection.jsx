import React from 'react';
import MainPromotionTitle from './MainPromotionTitle.jsx';
import MainProductSlider from './MainProductSlider.jsx';

export default function PromotionSection() {
  return (
    <div className='main_setion'>
      <MainPromotionTitle />
      <MainProductSlider />
    </div>
  );
}

