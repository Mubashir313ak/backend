import express from 'express';
// import { createSession } from './paymentController.js';
import { createSession } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/create-session', createSession);

export default router;
