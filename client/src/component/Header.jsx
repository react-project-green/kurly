import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const [ topMenu, setTopMenu ] = useState([]);
  const [ supportMenu, setSupportMenu ] = useState([]);
  const [ menuList, setMenuList ] = useState([]);
  const [ icons, setIcons ] = useState([]);
  const [ categoryList, setCategoryList ] = useState([]);
  const [ hoverCategoryIndex, setHoverCategoryIndex ]= useState(null);

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
  // console.log('categoryList',categoryList);
  
  return (
    <div className='header_outline'>
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
                      <li>
                        <Link to={menu.path} className='thin' >
                          {menu.title}
                        </Link>
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
              <button type='button' className='thin'>마켓컬리</button>
            </div>
            <div className='header_middle_search'>
              <input type="text" placeholder='검색어를 입력해주세요'/>
              <button className='search_button'></button>
            </div>
            <div className='header_middle_right'>
              { icons && icons.map((icon)=>( 
                <button className='header_top_icon'>
                  <img src={icon.icon} alt="icons"  />
                </button>
              ))}             
            </div>
          </div> {/* end of header-middle */}
        </div>   {/* end of header-top */}

        <div className='header_bottom_menu'>
          <div className='category'>
            <span className='category_icon'></span>
            <span className='category_title'>카테고리</span>
            <ul className='category_list'>
              {categoryList && categoryList.map((category, idx)=>(
                <li key={idx}
                    onMouseEnter={() => setHoverCategoryIndex(idx)}
                    onMouseLeave={() => setHoverCategoryIndex(null)}>
                    { idx <= 5 ? ( 
                          <Link to='' className='thin'>
                            <img src={category.img} alt="" />{category.title}
                          </Link>  
                        ) : (
                          <span className='thin'>
                            <img src={category.img} alt="" />{category.title}
                          </span>
                        )} 
                    {hoverCategoryIndex === idx && (
                      <ul className='variety_list'>
                          {category.variety && category.variety.map((item, i)=>(
                              <li key={i}>
                                  <Link to=''>{item.name}</Link>
                              </li>      
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
                <button>{menu.title}</button>
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

