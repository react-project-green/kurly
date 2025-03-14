import { SearchContext } from "../context/searchContext.js";
import { useContext, useRef } from "react";
import axios from "axios";

// export function useRecently() {
//   const { recentlyItems, setRecentlyItems } = useContext(SearchContext);
//   const prevRecentlyItemsRef = useRef(recentlyItems);

//   const getRecntlyItems = async() =>{
//     try {
//       const localPidArray = JSON.parse(localStorage.getItem('viewProducts')); 
//       console.log('localPidArray',localPidArray);
  
//       if(localPidArray !== null) {
//         if(localPidArray.length !==0 ){
//           const result =await axios.post('http://localhost:9000/main/recentlyViewItem', {"pidArray":localPidArray});
          
//           if (JSON.stringify(prevRecentlyItemsRef.current) !== JSON.stringify(result.data)) {
//             prevRecentlyItemsRef.current = result.data; // 🔥 최신값을 useRef에 저장
//             setRecentlyItems(result.data);
//           }  
//           }
//         }else{
//           console.log('상품 존재하지 않음');
//         } 
//       } catch (error) {
//         console.error('로컬스토리지 파싱 오류:', error);
//       }
//   };

//  return { getRecntlyItems };
// };

