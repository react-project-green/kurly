import React, {useEffect} from 'react';
import PromoBanner from '../component/main/PromoBanner';
import MainSideBarMenu from'../component/main/MainSideBarMenu.jsx';
import MainSection from'../component/main/MainSection.jsx';
import MainPopUp from'../component/main/MainPopUp.jsx';


export default function KurlyMain() {
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
    <div className='content-outline'>
      <PromoBanner />
      <MainSideBarMenu />
      <div className='content'> 
        <MainPopUp />
        <MainSection /> {/* 1단위 ~주말특가 */}
      </div>
    </div>
  );
}

