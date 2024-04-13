import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js'; 
import stripeRoutes from './routes/paymentRoutes.js';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/demoDb_student';


mongoose.connect(MONGO_URL).then(() => {
  console.log("Database connected successfully.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api/payments', stripeRoutes);