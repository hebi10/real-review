import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "몽고DB_커넥션_스트링_여기에";
mongoose.connect(MONGO_URI).then(() => console.log("MongoDB 연결 완료!"));

// 상품 모델
const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  price: String,
});
const Product = mongoose.model("Product", productSchema);

// 상품 전체 조회 API
app.get("/api/products", async (req, res) => {
  const items = await Product.find();
  res.json(items);
});

// (포트 5000 등에서 구동)
app.listen(5000, () => console.log("서버 ON http://localhost:5000"));
