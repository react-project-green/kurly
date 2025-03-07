import React from 'react';
import express from 'express';
import * as controller from '../controller/mainController.js';

const router = express.Router();

router.post('/category',         controller.getProductList)
      .post('/categories',       controller.getCategoryProductList)
      .post('/subcategories',    controller.getSubCategoryProductList)
      .post('/userinfo',         controller.getUserInfo)
      .post('/addressUpdate',    controller.getUserAddressUpdate)
      .post('/recentlyViewItem', controller.getRecentlyViewItem)
      .post('/wishList',         controller.getWishListInfo);

export default router;


