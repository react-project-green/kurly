import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderPromotionBanner from './main/HeaderPromotionBanner';
import DaumPostcode from 'react-daum-postcode';
import { AuthContext } from './auth/AuthContext.js'
import { SearchContext } from '../context/searchContext.js';
<<<<<<< HEAD
import { Modal, Button } from 'antd'; 
import { useHeaderHandler } from '../hooks/useHeaderHandler.js';

export default function Header() {
  const [ topMenu, setTopMenu] = useState([]);
  const [ supportMenu, setSupportMenu] = useState([]);
  const [ categoryList, setCategoryList] = useState([]);
  const [ subCategoryList, setSubCategoryList] = useState([]);
  const [ hoverCategoryCid , setHoverCategoryCid ] = useState(null);
  // const [ isOpen, setIsOpen] = useState(false);
  const { isLogin, userType, setUserType } = useContext(AuthContext);
  const { searchKeyword, setSearchKeyword} = useContext(SearchContext);
=======
import { Modal, Button } from 'antd';

export default function Header() {
  const [topMenu, setTopMenu] = useState([]);
  const [supportMenu, setSupportMenu] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [hoverCategoryIndex, setHoverCategoryIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin, setIsLogin, userType, setUserType } = useContext(AuthContext);
  const { setSearchList } = useContext(SearchContext);
>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521
  const navigate = useNavigate();
  const { handleComplete, handleTogle, handleKeyPress, handleSearch, handleCateNavigate, handleLoginToggle, isOpen  } = useHeaderHandler();

  useEffect(() => {
    axios.get('/data/header.json')
      .then((res) => {
        setTopMenu(res.data["header_top_menu"])
        setSupportMenu(res.data["support_menu"])
      })
      .catch((error) => console.log(error))
  }, []);
<<<<<<< HEAD
 
  useEffect(()=>{
    const fetchCategory = async () =>{
      try {
        const category = await axios.post('http://localhost:9000/main/categories');
        const sub_cate = await axios.post('http://localhost:9000/main/subcategories');
        setCategoryList(category.data);
        console.log(sub_cate.data);
        setSubCategoryList(sub_cate.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory();     
  },[]);
=======

  const handleChange = (e) => {
    setSearchValue(e.target.value.trim());
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  }
  const handleSearch = () => {
    axios.post('http://localhost:9000/main/search', { 'search': searchValue })
      .then((res) => {
        console.log('검색해봐!!!', res.data)
        navigate('');
        setSearchList(res.data);
      })
      .catch((error) => console.log(error))
  };

  const handleComplete = (data) => {
    setIsOpen(false);
  };

  const handleTogle = () => {
    setIsOpen((prev) => !prev);
  };

  //로그인으로 헤더 버튼 변경
  const handleLoginToggle = () => {
    if (isLogin) {
      const select = window.confirm("로그아웃 하시겠습니까?");
      if (select) {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_type");
        setIsLogin(false);
        setUserType('');
        navigate('/member/login');
        alert("로그아웃되었습니다.");
      }
    } else {
      navigate('/member/login');
    }
  };

>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521

  return (
    <div className='header_outline'>
      <HeaderPromotionBanner />
      <div className='header'>
        <div className='header_top'>
          <div className='header_top_menu'>
            {/* 로그인 상태에 따른 Header-topMenu 변경 */}
            {topMenu && topMenu.map((menu) => (
              // 로그인 => 로그아웃
              menu.path === "/member/login" ? (
                isLogin ? (
                  // 로그아웃 상태일 때
                  <button
                    className='thin header_top_menu_item'
                    onClick={handleLoginToggle} // 로그아웃 처리 함수
                  >
                    로그아웃
                  </button>
                ) : (
                  // 로그인 상태가 아닐 때
                  <Link
                    to={menu.path}
                    className='thin header_top_menu_item'
                    onClick={handleLoginToggle}
                  >
                    로그인
                  </Link>
                )
              ) : (
                // token이 없으면 회원가입
                menu.path === "/member/signup" && !localStorage.getItem("token") ? (
                  <Link to={menu.path} className='thin header_top_menu_item'>
                    {menu.title}
                  </Link>
                ) : (
<<<<<<< HEAD
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
=======
                  // token이 있으면 MyPage
                  menu.path === "/member/signup" && localStorage.getItem("token") ? (
                    <Link to="/member/mypage" className='thin header_top_menu_item'>
                      MyPage
>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521
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
                                <li className='thin' onClick={() => { navigate('/') }}>
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
              )
            ))}
          </div>{/* end header top menu */}
          <div className='header_middle'>
            <div className='header_middle_left'>
              <img src="/images/commonImage/Logo.svg" alt="image Logo" />
              <button type='button' onClick={() => handleCateNavigate('/')}>뷰티컬리</button>
            </div>
            <div className='header_middle_search'>
<<<<<<< HEAD
              <input type="text" 
                     placeholder='검색어를 입력해주세요'
                     onChange={(e)=>setSearchKeyword(e.target.value.trim())}
                     value={searchKeyword} 
                     onKeyDown={handleKeyPress}/>
              <button className='search_button' onClick={()=>handleSearch()}></button>
=======
              <input type="text"
                placeholder='검색어를 입력해주세요'
                onChange={(e) => { handleChange(e) }}
                value={searchValue}
                onKeyDown={handleKeyPress} />
              <button className='search_button' onClick={handleSearch}></button>
>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521
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
<<<<<<< HEAD
              <button className='header_top_icon' 
                      onClick={() => { isLogin ? handleCateNavigate('/'): handleCateNavigate('/member/login')}} >
=======
              <button className='header_top_icon'
                onClick={() => { isLogin ? navigate('/') : navigate('/member/login') }} >
>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521
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
<<<<<<< HEAD
                    onMouseEnter={() => setHoverCategoryCid(category.cid)}
                    onMouseLeave={() => setHoverCategoryCid(null)} >
                    { idx <= 3 ? ( 
                        <span className='thin category_list_1'
                              onClick={()=>{handleCateNavigate('/main/categories')}}>
                          <img src={category.image}/>{category.title}
                        </span>  
                      ) : (
                        <span className='thin category_list_2'>
                          <img src={category.image} />{category.title}
                        </span>
                      )} 
                    {hoverCategoryCid === category.cid && (
                      <ul className='variety_list light'>
                        {subCategoryList && subCategoryList.filter((sub)=>sub.cid === category.cid)
                        .map((item)=>(
                            <li key={item.sid} 
                                className={ item.sid <= '002' ? 'category_acitve':'' }
                                onClick={()=>{handleCateNavigate('/main/categories')} }>{item.title}
                            </li>      
                        )    
                        )}
                      </ul>  
                    )}  
=======
                  onMouseEnter={() => setHoverCategoryIndex(idx)}
                  onMouseLeave={() => setHoverCategoryIndex(null)} >
                  {idx <= 3 ? (
                    <span className='thin category_list_1'
                      onClick={() => { navigate('/main/categories') }}>
                      <img src={category.img} />{category.title}
                    </span>
                  ) : (
                    <span className='thin category_list_2'>
                      <img src={category.img} />{category.title}
                    </span>
                  )}
                  {hoverCategoryIndex === idx && (
                    <ul className='variety_list light'>
                      {category.variety && category.variety.map((item, i) => (
                        <li key={i}
                          className={i <= 1 ? 'category_acitve' : ''}
                          onClick={() => { navigate('/') }}>{item.name}
                        </li>
                      ))}
                    </ul>
                  )}
>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521
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
<<<<<<< HEAD
              { (userType === 'A') ?  
                   <button onClick={() => handleCateNavigate('/goods/new')}>상품등록</button> 
                 : <button onClick={() => handleCateNavigate('/main/category/special')}>특가/혜택</button>
=======
              {(userType === 'A') ?
                <button onClick={() => { navigate('/goods/new') }}>상품등록</button>
                : <button onClick={() => { navigate('/main/category/special') }}>특가/혜택</button>
>>>>>>> 75bca5f22bef9f1e8c265fdbc217e2c7136e6521
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

