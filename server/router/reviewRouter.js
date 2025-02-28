import express from 'express';
import * as controller from '../controller/reviewController.js';

const router = express.Router();

router
    .post('/', controller.registerReview)
    .post('/getList', controller.getReviewList)
    .post('/getImages', controller.getTotalImages);

export default router;