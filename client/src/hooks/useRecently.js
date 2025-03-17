import { SearchContext } from "../context/searchContext.js";
import { useContext, useRef } from "react";
import axios from "axios";

export function useRecently() {
  const { recentlyItems, setRecentlyItems } = useContext(SearchContext);

  const getRecntlyItems = async() =>{
    try {
      const localPidArray = JSON.parse(localStorage.getItem('viewProducts')); 
  
      if(localPidArray !== null) {
        if(localPidArray.length !==0 ){
          const result =await axios.post('http://localhost:9000/main/recentlyViewItem', {"pidArray":localPidArray});
          if(result.data.length > 0){
             setRecentlyItems([...result.data]); 
          }
        }
      }
    }catch (error) {
      console.error('로컬스토리지 파싱 오류:', error);
    }
  };

 return { getRecntlyItems };
};

