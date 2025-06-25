// src/pages/Product/ProductListPage.tsx
import Layout from "../../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Table = styled.table`
  width: 100%;
  margin-top: 2rem;
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  border-collapse: collapse;
  th, td { padding: 1.1rem 1rem; }
  th { background: #f3f4f6; }
  tr:not(:last-child) { border-bottom: 1px solid #e5e7eb; }
  td img { width: 60px; border-radius: 8px; }
  td {text-align: center; }
  @media (max-width: 600px) {
    th, td { padding: 0.7rem 0.5rem; font-size:0.95rem;}
    td img { width: 38px;}
  }
`;

function ProductListPage() {
  const products = useSelector((state: RootState) => state.product);
  
  return (
    <Layout>
      <h1>상품 전체 목록</h1>
      <Table>
        <thead>
          <tr>
            <th>상품</th>
            <th>상품명</th>
            <th>후기</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <tr key={item.id}>
              <td><img src={item.img} alt={item.name}/></td>
              <td><Link to={`/product/${item.id}`}>{item.name}</Link></td>
              <td>{item.reviews}건</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}
export default ProductListPage;
