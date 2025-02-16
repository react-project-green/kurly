import express from 'express';
import * as controller from '../controller/uploadController.js';

const router = express.Router();

router.post('/file', controller.uploadFile);

export default router;