import express from "express";
import * as controller from '../controller/cartController.js';

const router = express.Router();

router 
    .post('/items', controller.getItems)
    .post('/add', controller.addCart)
    .put('/updateQty', controller.updateQty)
    .post('/count', controller.getCount)
    .delete('/deleteItem', controller.deleteItem);

export default router;