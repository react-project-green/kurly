import React from 'react';
import PromotionSection from'./PromotionSection.jsx';
import TodayPromotion from './TodayPromotion.jsx';

export default function MainSection() {
  return (
    <div>
      <PromotionSection /> {/* title + 상품리스트 */}
      <PromotionSection />
      <TodayPromotion />
      <PromotionSection />
    </div>
  );
}

