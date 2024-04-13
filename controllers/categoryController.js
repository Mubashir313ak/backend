// import Category from "../models/Category";
import Category from "../models/Category.js";

export async function createCategory(req, res) {
  try {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating category', error: error.message });
  }
}

export async function getAllCategories(req, res) {
  try {
    const categories = await Category.find(); // Use Category.find() directly
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching categories', error: error.message });
  }
}
