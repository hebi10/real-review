import Layout from "../components/Layout";
function NotFound() {
  return (
    <Layout>
      <h1 style={{color:"#c22",marginTop:"4rem"}}>404 - 페이지를 찾을 수 없습니다.</h1>
      <p style={{marginTop:"2rem"}}>잘못된 접근입니다. <a href="/" style={{color:"#3366ff"}}>홈으로 돌아가기</a></p>
    </Layout>
  );
}
export default NotFound;
