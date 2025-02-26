import React,{useContext} from 'react';
import {PidContext} from '../context/ProductContext.js';

export function usePid() {
    const {pidArr, setPidArr, heartArr, setHeartArr} = useContext(PidContext);

    const setPidList = (pid) => {
        if(pidArr.length < 10){
            setPidArr([pid, ...pidArr]);
        }else{
            setPidArr([...pidArr.slice(1), pid]);
        }
        localStorage.setItem('viewProducts',pidArr);      
    }
    
    const setHeartList = (pid) => {
        const check = heartArr.includes(pid);
        console.log('중복되는 값이 있나?',check);
        if(check){
             const newList = heartArr.filter((num)=> num !== pid)
             setHeartArr(newList);
        }else{
            setHeartArr([...heartArr, pid]);
        }
        console.log('usePid heartArr ====>>',heartArr);
        
        localStorage.setItem('viewHeartList',heartArr);      
    }


    return { setPidList ,setHeartList };
}

