import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  desc: string;
  img: string;
  price: string;
  reviews: number;
  buyLink: string;
  youtubeLink: string;
}

const initialState: Product[] = [
  {
    id: "1",
    name: "무선 미니 청소기",
    desc: "작고 강력한 생활 필수템",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    price: "29,800원",
    reviews: 3,
    buyLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    youtubeLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "스탠딩 선풍기",
    desc: "여름철 필수 추천템",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: "38,000원",
    reviews: 2,
    buyLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    youtubeLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "스테인리스 식기세트",
    desc: "튼튼하고 위생적인 주방용품",
    img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    price: "23,000원",
    reviews: 1,
    buyLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    youtubeLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
