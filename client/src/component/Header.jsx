import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderPromotionBanner from './main/HeaderPromotionBanner';
import DaumPostcode from 'react-daum-postcode';
import { Modal} from 'antd'; 
import { AuthContext } from './auth/AuthContext.js'
import { useHeaderHandler } from '../hooks/useHeaderHandler.js';
import { SearchContext } from '../context/searchContext.js';
import { CartContext } from '../context/CartContext.js'
export default function Header() {
  
  const [ hoverCategoryCid , setHoverCategoryCid ] = useState(null);
  const { isLogin, userType } = useContext(AuthContext);
  const { searchKeyword, setSearchKeyword} = useContext(SearchContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const user_address = localStorage.getItem('address');
  const { handleComplete, handleTogle, handleKeyPress, 
          handleSearch, handleCateNavigate, handleLoginToggle, 
          isOpen, categoryList, subCategoryList, userAddress, 
          topMenu, supportMenu } = useHeaderHandler();
 
  return (
    <div className='header_outline'>
      <HeaderPromotionBanner />
      <div className='header'>
        <div className='header_top'>
          <div className='header_top_menu'>
            {/* 로그인 상태에 따른 Header-topMenu 변경 */}
            {topMenu && topMenu.map((menu, i) => (
              // 로그인 => 로그아웃
              menu.path === "/member/login" ? (
                isLogin ? (
                  // 로그아웃 상태일 때
                  <button key={i}
                          className='thin header_top_menu_item'
                          onClick={handleLoginToggle}>로그아웃
                  </button> // 로그아웃 처리 함수
                ) : (
                  // 로그인 상태가 아닐 때
                  <Link to={menu.path}
                        key={i}
                        className='thin header_top_menu_item'
                        onClick={handleLoginToggle}>로그인
                  </Link>
                )
              ) : ( // token이 없으면 회원가입
                menu.path === "/member/signup" && !localStorage.getItem("token") ? (
                  <Link to={menu.path} key={i} className='thin header_top_menu_item'  onClick={() =>handleCateNavigate('/')}>
                    {menu.title}
                  </Link>
                ) : ( // token이 있으면 MyPage
                  menu.path === "/member/signup" && localStorage.getItem("token") ? (
                    <Link to="/member/mypage/order" key={i} className='thin header_top_menu_item' onClick={() =>handleCateNavigate('/')}>
                      MyPage
                    </Link>
                ) : (
                  menu.path !== "/member/signup" && (
                    <Link to={menu.path} key={i}  className='thin header_top_menu_item' onClick={() =>handleCateNavigate('/')}>
                      {menu.title}
                      {menu.no === 3 && (
                        <>
                          <span className='drop_down_icon'></span>
                          <ul className='surrport_drop_down'>
                            {supportMenu && supportMenu.map((support, i) => (
                              <li className='thin' key={i} onClick={() =>handleCateNavigate('/')}>
                                {support.title}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </Link>
              ))))
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
                  { isLogin ? (
                    <>
                      <div className='user_address'>
                        <span>{userAddress.address}</span>
                      </div>
                      <button type='button' 
                              className='delivery_changebtn' 
                              onClick={()=>{ alert('마이페이지로 이동합니다');
                                            handleCateNavigate('/member/mypage/update')}}>배송지 변경</button>
                      <Modal open={isOpen} onCancel={handleTogle} footer={null} destroyOnClose={true}>
                        <DaumPostcode onComplete={handleComplete} />
                      </Modal>
                    </>
                    ) : ( 
                      user_address ? (
                        <>
                          <div className='user_address'>
                            <span>{user_address}</span>
                          </div>
                          <button type='button' className='delivery_changebtn' onClick={handleTogle}>배송지 변경</button>
                          <Modal open={isOpen} onCancel={handleTogle} footer={null} destroyOnClose={true}>
                            <DaumPostcode onComplete={handleComplete} />
                          </Modal>
                        </>
                      ):(
                        <>
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
                        </>
                      )
                )}
                </div>
              </div>
              <button className='header_top_icon' 
                      onClick={() => { isLogin ? handleCateNavigate('/member/mypage/heart'): handleCateNavigate('/member/login')}} >
                <img src="/images/commonImage/header_icon2.svg" alt="header_icon" />
              </button>
              <button className='header_top_icon cart_icon' onClick={() => handleCateNavigate('/cart')}>
                <img src="/images/commonImage/header_icon3.svg" alt="header_icon" />
                { cartCount !==0 &&
                  <p className='cartItem_icon_bk'>
                    <span className='cartItmem_icon'>{cartCount}</span>
                  </p>
                }   
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
              {categoryList && categoryList.map((category, i) => (
                <li key={i}
                    onMouseEnter={() => setHoverCategoryCid(category.cid)}
                    onMouseLeave={() => setHoverCategoryCid(null)} >
                    { category.cid <= 104 ? ( 
                        <span className='thin category_list_1'
                              onClick={()=> handleCateNavigate(`/main/categories/${category.cid}`)}>
                          <img src={category.image}/>{category.title}
                        </span>  
                      ) : (
                        <span className='thin category_list_2'>
                          <img src={category.image} />{category.title}
                        </span>
                    )} 
                    {hoverCategoryCid === category.cid && (
                      <ul className='variety_list light'>
                        {subCategoryList && subCategoryList.filter((sub)=>sub.cid === category.cid).map((item)=>(
                            <li key={item.sid} 
                                className={ item.sid <= '002' ? 'category_acitve':'' }
                                onClick={()=>{handleCateNavigate(`/main/subcategories/${item.cid}/${item.sid}`)} }>{item.title}
                            </li>      
                        )    
                        )}
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
                 : <button onClick={() => handleCateNavigate('/main/special')}>특가/혜택</button>
                //  : <button onClick={() => handleCateNavigate('/main/category/special')}>특가/혜택</button>
              }
            </li>
          </ul>
          <button type='button' className='delivery_btn_line'  onClick={() => handleCateNavigate('/member/delivery')}>
            <span>샛별·하루</span>
            <span>배송안내</span>
          </button>
        </div>   {/* end of header_bottom_menu */}
      </div>     {/* end of header */}
    </div>
  );
}

