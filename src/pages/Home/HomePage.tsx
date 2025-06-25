import Layout from "../../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
  &:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.13);}
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem 1.2rem 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function HomePage() {
  const products = useSelector((state: RootState) => state.product);
  return (
    <Layout>
      <h1>오늘의 추천 생활용품</h1>
      <Grid>
        {products.map(item => (
          <Card key={item.id}>
            <Img src={item.img} alt={item.name} />
            <Content>
              <h2 style={{fontSize:"1.12rem", margin:0}}>{item.name}</h2>
              <p style={{fontSize:"1rem",color:"#666",margin:"0.7rem 0 1rem"}}>{item.desc}</p>
              <Link to={`/product/${item.id}`} style={{
                alignSelf: "flex-end",
                background: "#3366ff",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "0.7rem",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none"
              }}>자세히 보기</Link>
            </Content>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
}
export default HomePage;
