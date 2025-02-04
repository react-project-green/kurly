import React from 'react';
import {Link} from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch, IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <div className='header-outline'>
      <div className='header'>
        <div className='header-top'>
          <div className='header-top-menu'>
            <Link to='/' className='header-top-menu-item' >회원가입</Link>
            <Link to='/' className='header-top-menu-item'>로그인</Link>
            <Link to='/' className='header-top-menu-item'>고객센터</Link>
            <IoMdArrowDropdown />
            <ul hidden>
              <li><Link to='' className='dropdown-item' />공지사항</li>
              <li><Link to='' className='dropdown-item' />자주하는 질문</li>
              <li><Link to='' className='dropdown-item' />1 : 1 문의</li>
              <li><Link to='' className='dropdown-item' />대량주문 문의</li>
            </ul>
          </div> {/* end of header-top-menu */}
          <div className='header-top-middle'>
            <div className='header-top-middle-left'>
              <img src="/images/Logo.svg" alt="image Logo" />
              <button>마켓컬리</button>
            </div>
            <div className='header-top-middle-search'>
              <input type="text" placeholder='검색어를 입력해주세요'/>
              <button><IoSearch /></button>
            </div>
            <div className='header-top-middle-right'>
              <IoLocationOutline className="header-top-icon"/>
              <FaRegHeart className="header-top-icon" />
              <FiShoppingCart className="header-top-icon" />
            </div>
          </div> {/* end of header-top-middle */}

        </div> {/* end of header-top */}
      </div>
    </div>
  );
}

