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
        setHeartArr([pid, ...heartArr]);
        localStorage.setItem('viewHeartList',heartArr);      
    }


    return { setPidList ,setHeartList };
}

