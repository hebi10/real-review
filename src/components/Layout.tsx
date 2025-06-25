// src/components/Layout.tsx
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/icons/mainLogo.png";

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgb(216, 226, 255);
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  @media (max-width: 600px) {
    padding: 0.8rem 0;
    font-size: 1.2rem;
  }

  img {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    @media (max-width: 600px) {
      width: 50px;
      height: 50px;
      margin-right: 0.5rem;
    }
  }
`;

const Nav = styled.nav`
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 0.5rem 0;
  @media (max-width: 600px) {
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.9rem;
    padding: 0.6rem 0;
  }
  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #3366ff;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem 1rem;
  @media (max-width: 600px) {
    padding: 1.5rem 0.8rem 3rem 0.8rem;
  }
`;

const Footer = styled.footer`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 1.2rem 0 1.7rem 0;
  font-size: 1rem;
  margin-top: auto;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 1rem 0 1.5rem 0;
  }
`;

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Header>
        <img src={logo} alt="Logo" />
        <Link to="/" style={{ color: "#003f6b", textDecoration: "none" }}>
          유튜브 생활용품 후기/추천
        </Link>
      </Header>
      <Nav>
        <Link to="/">홈</Link>
        <Link to="/product">상품목록</Link>
        <Link to="/about">소개</Link>
        <Link to="/policy">개인정보처리방침</Link>
        <Link to="/contact">문의</Link>
      </Nav>
      <Main>{children}</Main>
      <Footer>
        &copy; {new Date().getFullYear()} 생활용품 후기사이트. All Rights Reserved.
      </Footer>
    </Wrapper>
  );
}
export default Layout;
