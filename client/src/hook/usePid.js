import React,{useContext} from 'react';
import { PidContext } from '../context/ProductContext.js';

export function usePid(){
    const {pidArr, setPidArr} = useContext(PidContext);

    const setPid = (pid) => {
        if(pidArr.length < 10){
            setPidArr([pid, ...pidArr]);
        }else{
            setPidArr([...pidArr.slice(1), pid]);
        }
        localStorage.setItem('viewProducts',pidArr);
        console.log('pidArr',pidArr);
        

    }

    return {setPid}
}
