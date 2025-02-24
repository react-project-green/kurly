import React from 'react';
import express from 'express';
import * as controller from '../controller/categoryController.js';

const router = express.Router();

router.post('/category', controller.getProductList);

export default router;


