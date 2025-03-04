import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../component/auth/AuthContext";
import { SearchContext } from "../context/searchContext";

export function useHeaderHandler() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin, setUserType } = useContext(AuthContext);
  const { searchKeyword, setSearchKeyword, setSearch } = useContext(SearchContext);
  const [ isOpen, setIsOpen] = useState(false);

  
  const handleComplete = (data) => {
    setIsOpen(false);
  };
  
  const handleTogle = () => {
    setIsOpen((prev) => !prev);
  };
  
  /* 상단 검색창 엔터키 사용시 검색가능 -> 검색로직호출 */
  const handleKeyPress = (e) => {
     if(e.key === 'Enter') handleSearch();
  }

  /* 상단 검색창 로직 */
  const handleSearch = () =>{
    if(!searchKeyword.trim()) {
      alert('검색어를 입력해주세요');
      return ;
    }  
    setSearch(searchKeyword);
    navigate('/main/category/search');
  };

  /* 상단 카테고리 메뉴 클릭시 이동 */
  const handleCateNavigate = (path) => {  
    setSearchKeyword('');
    navigate(path);
  };

  /* 로그인으로 헤더 버튼 바꾸기 */
  const handleLoginToggle = () => {
    if (isLogin) {
      const select = window.confirm("로그아웃 하시겠습니까?")
      if (select) {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id")
        localStorage.removeItem("user_type");
        setIsLogin(false);
        setUserType('');
        setSearchKeyword('');
        navigate('/member/login');
        alert("로그아웃되었습니다.");
      }
    } else {
      setSearchKeyword('');
      navigate('/member/login');
    }
  }


  return {  handleComplete, handleTogle, handleKeyPress, handleSearch, handleCateNavigate, handleLoginToggle, isOpen };
};
