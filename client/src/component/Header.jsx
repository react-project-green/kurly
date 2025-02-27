import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderPromotionBanner from './main/HeaderPromotionBanner';
import DaumPostcode from 'react-daum-postcode';
import { AuthContext } from './auth/AuthContext.js'
import { SearchContext } from '../context/searchContext.js';
import { Modal, Button } from 'antd'; 
import { useHeaderHandler } from '../hooks/useHeaderHandler.js';

export default function Header() {
  const [ topMenu, setTopMenu] = useState([]);
  const [ supportMenu, setSupportMenu] = useState([]);
  const [ categoryList, setCategoryList] = useState([]);
  const [ hoverCategoryIndex, setHoverCategoryIndex] = useState(null);
  // const [ isOpen, setIsOpen] = useState(false);
  const { isLogin, userType, setUserType } = useContext(AuthContext);
  const { searchKeyword, setSearchKeyword} = useContext(SearchContext);
  const navigate = useNavigate();
  const { handleComplete, handleTogle, handleKeyPress, handleSearch, handleCateNavigate, handleLoginToggle, isOpen  } = useHeaderHandler();

  useEffect(() => {
    axios.get('/data/header.json')
      .then((res) => {
        setTopMenu(res.data["header_top_menu"])
        setSupportMenu(res.data["support_menu"])
        setCategoryList(res.data["category_list"])
      })
      .catch((error) => console.log(error))
  }, []);
 
  return (
    <div className='header_outline'>
      <HeaderPromotionBanner />
      <div className='header'>
        <div className='header_top'>
          <div className='header_top_menu'>
            {topMenu && topMenu.map((menu) => (
              menu.path === "/member/login" ? (
                <Link to={menu.path} className='thin header_top_menu_item' onClick={handleLoginToggle}>
                  {isLogin ? "로그아웃" : "로그인"} 
                </Link> 
              ) : (
                // Check for "member/signup" path and token in localStorage
                menu.path === "/member/signup" && !localStorage.getItem("token") ? (
                  <Link to={menu.path} className='thin header_top_menu_item'>
                    {menu.title}
                  </Link>
                ) : (
                  menu.path !== "/member/signup" && (
                    <Link to={menu.path} className='thin header_top_menu_item'>
                      {menu.title}
                      {menu.no === 3 && (
                        <>
                          <span className='drop_down_icon'></span>
                          <ul className='surrport_drop_down'>
                            {supportMenu && supportMenu.map((support) => (
                              <li className='thin' onClick={() =>handleCateNavigate('/')}>
                                {support.title}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </Link>
                  )
                )
              )
            ))}
          </div>{/* end header top menu */}
          <div className='header_middle'>
            <div className='header_middle_left'>
              <img src="/images/commonImage/Logo.svg" alt="image Logo" />
              <button type='button' onClick={() => handleCateNavigate('/')}>뷰티컬리</button>
            </div>
            <div className='header_middle_search'>
              <input type="text" 
                     placeholder='검색어를 입력해주세요'
                     onChange={(e)=>setSearchKeyword(e.target.value.trim())}
                     value={searchKeyword} 
                     onKeyDown={handleKeyPress}/>
              <button className='search_button' onClick={()=>handleSearch()}></button>
            </div>
            <div className='header_middle_right'>
              <div className='header_top_icon location_icon'>
                <img src="/images/commonImage/header_icon1.svg" alt="header_icon" />
                <div className='location_info'>
                  <div>
                    <span>배송지를 등록</span><span>하고</span><br />
                  </div>
                  <span>구매 가능한 상품을 확인하세요!</span>
                  <button type='button' onClick={() => handleCateNavigate('/member/login')}>로그인</button>
                  <button type='button' onClick={handleTogle}>
                    <img src="/images/commonImage/search_img.svg" />주소검색
                  </button>
                  <Modal open={isOpen} onCancel={handleTogle} footer={null}>
                    <DaumPostcode onComplete={handleComplete} />
                  </Modal>
                </div>
              </div>
              <button className='header_top_icon' 
                      onClick={() => { isLogin ? handleCateNavigate('/'): handleCateNavigate('/member/login')}} >
                <img src="/images/commonImage/header_icon2.svg" alt="header_icon" />
              </button>
              <button className='header_top_icon cart_icon' onClick={() => handleCateNavigate('/cart')}>
                <img src="/images/commonImage/header_icon3.svg" alt="header_icon" />
                {/* { cartCount !==0 &&
                  <p className='cartItem_icon_bk'>
                    <span className='cartItmem_icon'>{}</span>
                  </p>
                }    */}
              </button>
            </div> {/* end of header_middle_right */}
          </div>   {/* end of header-middle */}
        </div>     {/* end of header-top */}

        <div className='header_bottom_menu'>
          <div className='category'>
            <div className='category_div'>
              <span className='category_icon'></span>
              <span className='category_title'>카테고리</span>
            </div>
            <ul className='category_list'>
              {categoryList && categoryList.map((category, idx) => (
                <li key={idx}
                    onMouseEnter={() => setHoverCategoryIndex(idx)}
                    onMouseLeave={() => setHoverCategoryIndex(null)} >
                    { idx <= 3 ? ( 
                        <span className='thin category_list_1'
                              onClick={()=>{handleCateNavigate('/main/categories')}}>
                          <img src={category.img}/>{category.title}
                        </span>  
                      ) : (
                        <span className='thin category_list_2'>
                          <img src={category.img} />{category.title}
                        </span>
                      )} 
                    {hoverCategoryIndex === idx && (
                      <ul className='variety_list light'>
                        {category.variety && category.variety.map((item, i)=>(
                            <li key={i} 
                                className={ i <=1 ? 'category_acitve':'' }
                                onClick={()=>{handleCateNavigate('/')} }>{item.name}
                            </li>      
                        ))}
                      </ul>  
                    )}  
                </li>
              ))}
            </ul>
          </div>
          <ul className='menu_list'>
            <li>
              <button onClick={() => handleCateNavigate('/main/category/new')}>신상품</button>
            </li>
            <li>
              <button onClick={() => handleCateNavigate('/main/category/best')}>베스트</button>
            </li>
            <li>
              <button onClick={() => handleCateNavigate('/main/category/discount')}>알뜰쇼핑</button>
            </li>
            <li>
              { (userType === 'A') ?  
                   <button onClick={() => handleCateNavigate('/goods/new')}>상품등록</button> 
                 : <button onClick={() => handleCateNavigate('/main/category/special')}>특가/혜택</button>
              }
            </li>
          </ul>
          <button type='button' className='delivery_btn_line'>
            <span>샛별·하루</span>
            <span>배송안내</span>
          </button>
        </div>   {/* end of header_bottom_menu */}
      </div>     {/* end of header */}
    </div>
  );
}

