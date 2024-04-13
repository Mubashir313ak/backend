import { Schema, model } from 'mongoose';

// Define the schema for the Product model
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, // Assuming you have a Category model
});

// Create the Product model using the schema
const Product = model('Product', productSchema);

export default Product;
