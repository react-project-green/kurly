import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPromotionTitle() {
  const navigate = useNavigate();

  return (
    <div className='section_title'>
      <button type='button' onClick={()=>{navigate('/')}}>
        <span className='mtitle'>🛒 지금 가장 많이 담는 특가 </span>        
        <span className='mtitle_img'>
          <img src="/images/commonImage/section_icon1.svg" alt="icon" />  
        </span>        
      </button>
      <p className='section_subtitle'>컬리 추천 특가템 최대 50%</p>   
    </div>
  );
}

