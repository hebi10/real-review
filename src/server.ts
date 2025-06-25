// src/server.ts
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// 1) MongoDB 연결
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB 연결 완료!"))
  .catch((err) => console.error("MongoDB 연결 실패:", err));

// 2) API 라우팅 등 추가
// 예시:
app.get("/", (req, res) => res.send("Hello, World!"));

// 3) 서버 시작
app.listen(5000, () => console.log("서버 ON! http://localhost:5000"));
export {};