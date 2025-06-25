// src/pages/Product/ProductDetailPage.tsx
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Box = styled.div`
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  padding: 2rem;
  margin-bottom: 2.2rem;
  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  background: ${({ color }) => color === "youtube" ? "#ff0000" : "#3366ff"};
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-weight: 700;
  margin-top: 1rem;
  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ReviewBox = styled.div`
  background: #f5f7fa;
  border-radius: 1rem;
  padding: 1rem 1.3rem;
  margin-bottom: 1.2rem;
  @media (max-width: 600px) {
    padding: 0.8rem 1rem;
  }
`;

function ProductDetailPage() {
  const { id } = useParams<{id:string}>();
  const products = useSelector((state: RootState) => state.product);
  const item = products.find(p=>p.id===id) || products[0];
  const reviews = [
    { id: "r1", name: "사용자A", content: "정말 잘 빨리고 소음이 적어요!", rating: 5 },
    { id: "r2", name: "사용자B", content: "디자인이 예쁘고 생각보다 가벼워요.", rating: 4 }
  ];
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
        <form style={{marginTop:"2.2rem"}}>
          <h3 style={{fontSize:"1.1rem",marginBottom:"0.7rem"}}>후기 작성</h3>
          <input type="text" placeholder="닉네임" required style={{padding:"0.6rem",borderRadius:"0.6rem",border:"1px solid #bbb",width:"100%",maxWidth:"300px",marginBottom:"0.5rem"}}/>
          <br/>
          <textarea placeholder="후기를 입력하세요." required style={{width:"100%",height:"80px",padding:"0.7rem",borderRadius:"0.6rem",border:"1px solid #bbb",maxWidth:"500px",marginBottom:"0.7rem"}}/>
          <br/>
          <button type="submit" style={{background:"#3366ff",color:"#fff",border:"none",borderRadius:"0.7rem",padding:"0.6rem 1.1rem",fontWeight:700}}>후기 등록</button>
        </form>
      </section>
    </Layout>
  );
}
export default ProductDetailPage;
