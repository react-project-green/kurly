import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import HeaderPromotionBanner from './main/HeaderPromotionBanner';
import DaumPostcode from 'react-daum-postcode';
import { Modal, Button} from'antd';

export default function Header({cartCount, productPid}) {
  const [ topMenu, setTopMenu ] = useState([]);
  const [ supportMenu, setSupportMenu ] = useState([]);
  const [ menuList, setMenuList ] = useState([]);
  const [ icons, setIcons ] = useState([]);
  const [ categoryList, setCategoryList ] = useState([]);
  const [ hoverCategoryIndex, setHoverCategoryIndex ]= useState(null);
  const [ isOpen, setIsOpen ] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get('/data/header.json')
         .then((res)=>{
          setTopMenu(res.data["header_top_menu"])
          setSupportMenu(res.data["support_menu"])
          setMenuList(res.data["header_middle_menu"])
          setIcons(res.data["header_icons"])
          setCategoryList(res.data["category_list"]) 
        })
         .catch((error)=>console.log(error))
  },[]);
  
  const handleTogle = () => {
    setIsOpen((prev)=>!prev);
  };
 
  const handleComplete = (data) => {
    console.log('선택한 주소-->', data);
    setIsOpen(false);
  };
 

  return (
    <div className='header_outline'>
      <HeaderPromotionBanner />
      <div className='header'>
        <div className='header_top'>
          <div className='header_top_menu'>
            {topMenu && topMenu.map((menu)=>(
              <Link to={menu.path} className='thin header_top_menu_item' >
                {menu.title}
                {menu.no === 3 && <>
                  <span className='drop_down_icon'></span>
                  <ul className='surrport_drop_down'>
                    {supportMenu && supportMenu.map((menu)=>(
                      <li className='thin' onClick={()=>{navigate('/')}}>
                        {menu.title}
                      </li>  
                    ))}
                  </ul> 
                </>}
              </Link>
            ))}
          </div> {/* end of header-top-menu */}
          <div className='header_middle'>
            <div className='header_middle_left'>
              <img src="/images/commonImage/Logo.svg" alt="image Logo" />
              <button type='button' onClick={()=>navigate('/')}>뷰티컬리</button>
            </div>
            <div className='header_middle_search'>
              <input type="text" placeholder='검색어를 입력해주세요'/>
              <button className='search_button'></button>
            </div>
            <div className='header_middle_right'>
              <button className='header_top_icon location_icon'>  
                <img src="/images/commonImage/header_icon1.svg" alt="header_icon" />
                <div className='location_info'>
                    <div>
                      <span>배송지를 등록</span><span>하고</span><br/>
                    </div>
                    <span>구매 가능한 상품을 확인하세요!</span>
                    <button type='button' onClick={()=>navigate('/member/login')}>로그인</button>
                    <button type='button' onClick={handleTogle}>
                      <img src="/images/commonImage/search_img.svg"/>주소검색
                    </button>
                    <Modal open={isOpen} onCancel={handleTogle} footer={null}>
                      <DaumPostcode onComplete={handleComplete}/>
                    </Modal>  
                </div>
              </button>  
              <button className='header_top_icon' onClick={()=>navigate('/member/login')} >  
                <img src="/images/commonImage/header_icon2.svg" alt="header_icon" />
              </button>  
              <button className='header_top_icon cart_icon' onClick={()=>navigate('/cart')}>  
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
              {categoryList && categoryList.map((category, idx)=>(
                <li key={idx}
                    onMouseEnter={() => setHoverCategoryIndex(idx)}
                    onMouseLeave={() => setHoverCategoryIndex(null)}>
                    { idx <= 3 ? ( 
                        <span className='thin category_list_1' onClick={()=>{navigate('/')}}>
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
                          <li key={i} onClick={()=>{navigate('/')}}>{item.name}</li>      
                        ))}
                      </ul>  
                    )}  
                </li>
              ))}
            </ul>
          </div>
          <ul className='menu_list'>
            { menuList && menuList.map((menu)=>(
              <li>
                <button onClick={()=>{navigate(`${menu.path}`)}}>{menu.title}</button>
              </li>
            ))}
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

