import React, { useContext, useEffect} from 'react';
import RecentlyViewItemSlider from './RecentlyViewItemSlider.jsx';
import { useHeaderHandler } from '../../hooks/useHeaderHandler.js';
import '../../scss/main.scss'

export default function MainSideBarMenu({className}) {
  const {handleCateNavigate} = useHeaderHandler();
  
  useEffect(() => {
     const handleScroll = () => {
      (window.scrollY > 200)
      ? document.body.classList.add('scrolled')
      : document.body.classList.remove('scrolled');
     };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      <div className={`${className} side_bar_outline`}>
        <div className={`${className} side_bar1`}>
          <div className={`${className} side_delivery_info` }>
            <img src="/images/commonImage/deliveryInfo.jpg" alt=""  onClick={() => handleCateNavigate('/member/delivery')}/>
          </div>
        </div>
        <div className={`${className} side_bar2` }>
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



