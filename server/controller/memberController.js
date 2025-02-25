import * as repository from '../repository/memberRepository.js'
import jwt from 'jsonwebtoken';
/******************************
 * Signup : 회원가입
 ******************************/
export const signupMember = async(req, res)=>{
    const result = await repository.signupMember(req.body);
    res.json(result);
    res.end(); 
}
/******************************
 * Signup : 아이디 중복체크 
 ******************************/
export const getIdCheck = async(req, res)=>{
    console.log('id==>', req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result)
    res.end(); 
}
/******************************
 * Login : 로그인 
 ******************************/
export const loginMember = async(req, res)=>{
    console.log(req.body);
    let result = await repository.loginMember(req.body);
    if(result.result_rows === 1){
        const token = jwt.sign({"user_id":req.body.id}, 'ti96A2lqFU')
        result = {...result, "token":token}
        console.log(result); 
    }   
    res.json(result)
    res.end();
    
}