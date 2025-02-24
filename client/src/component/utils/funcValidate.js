import axios from 'axios';  

/************************
 * title : 회원가입 폼 체크
 * *********************/
    /*validate 함수 */
    export const validateSignup = (refs) => {
        if (!refs.current) {
            console.error("Refs object 찾을 수 없음");
            return false;  // Early exit if refs.current is undefined or null
        }
    
        const refEntries = Object.entries(refs.current);
    
        for (let i = 0; i < refEntries.length; i++) {
            const item = refEntries[i];
            const name = item[0];
            const ref = item[1];
    
            if (name !== 'emaildomain') {
                if (ref.current.value === '') {
                    ref.current.focus();
                    return false;
                }
            } else {
                if (ref.current.value === 'default') {
                    ref.current.focus();
                    return false;
                }
            }
        }
        return true;
    };
    
/***********************************
    Signup : 아이디 중복체크
************************************/
export const handleDuplicateIdCheck=(idRef, pwdRef, setIdCheckResult)=>{ 
    if(idRef.current.value === ''){ 
        idRef.current.focus();
        return false;
    }else {
        axios
            .post('http://localhost:9000/member/idcheck', {"id": idRef.current.value})
            .then(res=>{
                if(res.data.result === 1){
                    alert('이미 사용중인 아이디 입니다. 새로운 아이디를 입력해주세요.')
                    idRef.current.focus();
                    return false;
                } else {
                    alert('사용 가능한 아이디 입니다.') 
                    setIdCheckResult("complete");
                    pwdRef.current.focus();
                    return false;
                } 
            })
            .catch(error => console.log(error)); 
        }
    };



