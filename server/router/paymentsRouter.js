import express from 'express';
import * as controller from '../controller/paymentsController.js';

const router = express.Router();

router.route('/confirm').get(controller.confirmPayment);

export default router;
