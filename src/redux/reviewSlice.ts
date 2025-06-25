import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Review {
  id: string;
  productId: string;
  name: string;
  content: string;
  rating: number;
}

const initialState: Review[] = [
  { id: "r1", productId: "1", name: "사용자A", content: "정말 잘 빨리고 소음이 적어요!", rating: 5 },
  { id: "r2", productId: "1", name: "사용자B", content: "디자인이 예쁘고 생각보다 가벼워요.", rating: 4 },
  { id: "r3", productId: "2", name: "사용자C", content: "시원하고 조용해서 좋아요.", rating: 5 },
  { id: "r4", productId: "3", name: "사용자D", content: "튼튼해서 오래 쓸 수 있을 것 같아요.", rating: 4 }
];

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<Review>) {
      state.push(action.payload);
    }
  }
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
