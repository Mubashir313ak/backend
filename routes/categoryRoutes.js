import express from 'express';
const router = express.Router();
// import { createCategory, getAllCategories } from '../controllers/categoryController.js'; // Updated file extension
import { createCategory, getAllCategories } from '../controllers/categoryController.js';

router.post('/categories', createCategory);

router.get('/categories', getAllCategories);

export default router;
