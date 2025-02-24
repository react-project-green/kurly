import express from "express";
import * as controller from '../controller/cartController.js';

const router = express.Router();

router 
    .post('/items', (req, res) => { res.send('장바구니 추가'); });

export default router;