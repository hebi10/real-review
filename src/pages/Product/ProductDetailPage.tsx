// src/pages/Product/ProductDetailPage.tsx
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { addReview } from "../../redux/reviewSlice";
import { v4 as uuidv4 } from "uuid";

const Box = styled.div`
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  padding: 2rem;
  margin-bottom: 2.2rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  background: ${({ color }) => color === "youtube" ? "#ff0000" : "#3366ff"};
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-weight: 700;
  margin-top: 1rem;
  
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ReviewBox = styled.div`
  background: #f5f7fa;
  border-radius: 1rem;
  padding: 1rem 1.3rem;
  margin-bottom: 1.2rem;
`;

function ProductDetailPage() {
  const { id } = useParams<{id:string}>();
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product);
  const item = products.find(p=>p.id===id) || products[0];
  const reviews = useSelector((state: RootState) =>
    state.review.filter(r => r.productId === item.id)
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const content = (form.elements.namedItem("content") as HTMLTextAreaElement).value;
    if (!name || !content) return;
    dispatch(addReview({ id: uuidv4(), productId: item.id, name, content, rating: 5 }));
    form.reset();
  };
  return (
    <Layout>
      <Box>
        <Img src={item.img} alt={item.name}/>
        <h1>{item.name}</h1>
        <p style={{margin:"0.8rem 0 1.1rem",color:"#666"}}>{item.desc}</p>
        <div>
          <span style={{fontWeight:600}}>가격:</span> {item.price}
        </div>
        <LinkButton href={item.buyLink} target="_blank" rel="noopener noreferrer" color={"buy"}>
          구매 링크 바로가기
        </LinkButton>
        <LinkButton href={item.youtubeLink} target="_blank" rel="noopener noreferrer" color={"youtube"}>
          유튜브 추천 영상 보기
        </LinkButton>
      </Box>
      <section>
        <h2>리뷰 & 후기</h2>
        {reviews.map(r=>(
          <ReviewBox key={r.id}>
            <div style={{fontWeight:600}}>{r.name}</div>
            <div>{"⭐".repeat(r.rating)}</div>
            <div style={{marginTop:"0.6rem"}}>{r.content}</div>
          </ReviewBox>
        ))}
        <form onSubmit={handleSubmit} style={{marginTop:"2.2rem"}}>
          <h3 style={{fontSize:"1.1rem",marginBottom:"0.7rem"}}>후기 작성</h3>
          <input name="name" type="text" placeholder="닉네임" required style={{padding:"0.6rem",borderRadius:"0.6rem",border:"1px solid #bbb",width:"40%",marginBottom:"0.5rem"}}/>
          <br/>
          <textarea name="content" placeholder="후기를 입력하세요." required style={{width:"90%",height:"60px",padding:"0.7rem",borderRadius:"0.6rem",border:"1px solid #bbb",marginBottom:"0.7rem"}}/>
          <br/>
          <button type="submit" style={{background:"#3366ff",color:"#fff",border:"none",borderRadius:"0.7rem",padding:"0.6rem 1.1rem",fontWeight:700}}>후기 등록</button>
        </form>
      </section>
    </Layout>
  );
}
export default ProductDetailPage;
