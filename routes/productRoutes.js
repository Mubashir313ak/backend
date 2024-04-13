import express from 'express';
const router = express.Router();
import { createProduct, getProductsByCategory } from '../controllers/productController.js'; // Make sure to update the file extension

// Create a new product under a category
router.post('/products', createProduct);

// Get products by category
router.get('/products/:categoryId', getProductsByCategory);

export default router;
