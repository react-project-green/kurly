import React from 'react';
import PromotionTitle from './PromotionTitle.jsx';
import MainProductSlider from './MainProductSlider.jsx';
import WeekendSpecial from './WeekendSpecial.jsx';

export default function PromotionSection() {
  return (
    <div>
      <PromotionTitle />
      <MainProductSlider />
      <WeekendSpecial />
    </div>
  );
}

