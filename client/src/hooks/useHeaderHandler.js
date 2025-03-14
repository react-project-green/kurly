// import { useNavigate } from "react-router-dom";
// import { useContext, useEffect, useState, useRef } from "react";
// import { AuthContext } from "../component/auth/AuthContext";
// import { SearchContext } from "../context/searchContext";
// import { CartContext } from "../context/CartContext";
// import axios from "axios";

// export function useHeaderHandler() {
//   const navigate = useNavigate();
//   const { isLogin, setIsLogin, setUserType } = useContext(AuthContext);
//   const { searchKeyword, setSearchKeyword, setSearch } = useContext(SearchContext);
//   const { wishList, setWishList} = useContext(CartContext);
//   const [ isOpen, setIsOpen] = useState(false);
//   const [ topMenu, setTopMenu] = useState([]);
//   const [ userAddress, setUserAddress] = useState('');
//   const user_id = localStorage.getItem('user_id');

  /* 주소 api - 모달 열기/닫기 토글  */
//   const handleTogle = () => {        
//     setIsOpen((prev) => !prev);
//   };

//   /* 주소 api - 주소 선택 완료 시 실행 */
//   const handleComplete = (data) => {  
//     const address = `${data.address}${data.buildingName ? `(${data.buildingName})` : ''}`;
//     if(user_id){
//       axios.post('http://localhost:9000/main/addressUpdate', { address, id: user_id })
//            .then((res)=>{
//             console.log(res.data)
//             setUserAddress(res.data)})
//            .catch((error)=>console.log(error))
//     }else{
//       localStorage.setItem("address", address)
//     }
//     handleTogle();
//   };
  
  
//   /* 상단 검색창 엔터키 사용시 검색가능 -> 검색로직호출 */
//   const handleKeyPress = (e) => {
//      if(e.key === 'Enter') handleSearch();
//   }

//   /* 상단 검색창 로직 */
//   const handleSearch = () =>{
//     if(!searchKeyword.trim()) {
//       alert('검색어를 입력해주세요');
//       return ;
//     }  
//     setSearch(searchKeyword);
//     navigate('/main/category/search');
//   };

//   /* 상단 카테고리 메뉴 클릭시 이동 */
//   const handleCateNavigate = (path) => {  
//     setSearchKeyword('');
//     navigate(path);
//   };

//   const handleKywordDelete = () => {
//     setSearchKeyword('');
//   };

//   /* 로그인으로 헤더 버튼 바꾸기 */
//   const handleLoginToggle = () => {
//     if (isLogin) {
//       const select = window.confirm("로그아웃 하시겠습니까?")
//       if (select) {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user_id")
//         localStorage.removeItem("user_type");
//         localStorage.removeItem("address");
//         localStorage.removeItem("checkedItems");
//         setIsLogin(false);
//         setUserType('');
//         setSearchKeyword('');
//         navigate('/member/login');
//         alert("로그아웃되었습니다.");
//       }
//     } else {
//       setSearchKeyword('');
//       localStorage.removeItem("address");
//       navigate('/member/login');
//     }
//   }


//   return {  handleComplete, handleTogle, handleKeyPress, handleSearch, handleCateNavigate, handleLoginToggle,
//             isOpen, categoryList, subCategoryList, userAddress, topMenu, supportMenu, handleKywordDelete  }

// };