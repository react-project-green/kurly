import React from 'react';
import RecentlyViewItemSlider from './RecentlyViewItemSlider.jsx';
import '../../scss/main.scss'
export default function MainSideBarMenu() {
  return (
    <>
      <div className='side_bar_outline'>
        <div className='side_bar1'>
          <div className='side_delivery_info'>
            <img src="/images/commonImage/deliveryInfo.jpg" alt="" />
          </div>
        </div>
        <div className='side_bar2'>
          <ul>
            <li>컬리 고객 제도</li>
            <li>컬리 큐레어터</li>
            <li>레시피</li>
          </ul>
        </div>
        <RecentlyViewItemSlider/> 
      </div>
    </>
  );
}



