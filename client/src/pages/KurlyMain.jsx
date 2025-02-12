import React from 'react';
import PromoBanner from '../component/main/PromoBanner';
import MainSideMenu from'../component/main/MainSideMenu.jsx';
import MainSection from'../component/main/MainSection.jsx';
import HotRanking from'../component/main/HotRanking.jsx';


export default function KurlyMain() {
  return (
    <div className='content-outline'>
      <PromoBanner />
      <MainSideMenu />
      <div className='content'> 
        <MainSection /> {/* 1단위 ~주말특가 */}
        <HotRanking />      {/* 1단위 ~실시간 인기랭킹 */}
        {/* <MainProductList /> 1단위 ~주말특가 */}
      </div>
    </div>
  );
}

