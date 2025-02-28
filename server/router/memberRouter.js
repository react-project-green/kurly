import express from 'express';
import * as controller from '../controller/memberController.js'

const router = express.Router();

router
    .post('/signup', controller.signupMember) //회원가입
    .post('/idcheck', controller.getIdCheck) //아이디중복체크
    .post('/login', controller.loginMember) //로그인
    .post('/mypage', controller.getUserName) //유저 이름 호출
    .post('/type', controller.getUserType) // 유저 타입 확인

    export default router; 