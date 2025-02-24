import * as repository from '../repository/memberRepository.js'
import jwt from 'jsonwebtoken';

export const signupMember = async(req, res)=>{
    const result = await repository.signupMember(req.body);
    res.json(result);
    res.end();
}