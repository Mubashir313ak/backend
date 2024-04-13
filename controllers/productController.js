import Product from "../models/Product.js"; // Assuming you have a Product model

// Create a new product under a category
export async function createProduct(req, res) {
  try {
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating product', error: error.message });
  }
}

// Get products by category
export async function getProductsByCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ category: categoryId });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching products by category', error: error.message });
  }
}
