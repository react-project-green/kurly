import React from 'react';
import express from 'express';
import * as controller from '../controller/mainController.js';

const router = express.Router();

router.post('/category', controller.getProductList)
      .post('/search', controller.getSearchItem)
      .post('/categories', controller.getCategoryProductList);

export default router;


