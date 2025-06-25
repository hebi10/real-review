import Layout from "../../components/Layout";
import styled from "styled-components";

const Form = styled.form`
  margin: 2rem auto 0;
  background: #fff;
  border-radius: 1rem;
  max-width: 500px;
  width: 100%;
  padding: 2rem 1.2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  @media (max-width: 500px) {
    padding: 1.5rem 1rem;
  }
`;

function ContactPage() {
  return (
    <Layout>
      <h1>문의하기</h1>
      <Form>
        <div style={{marginBottom:"1.1rem"}}>
          <label>이름<br/>
            <input type="text" required style={{width:"100%",padding:"0.6rem",borderRadius:"0.6rem",border:"1px solid #bbb"}}/>
          </label>
        </div>
        <div style={{marginBottom:"1.1rem"}}>
          <label>이메일<br/>
            <input type="email" required style={{width:"100%",padding:"0.6rem",borderRadius:"0.6rem",border:"1px solid #bbb"}}/>
          </label>
        </div>
        <div style={{marginBottom:"1.2rem"}}>
          <label>문의 내용<br/>
            <textarea required style={{width:"100%",height:"70px",padding:"0.7rem",borderRadius:"0.6rem",border:"1px solid #bbb"}}/>
          </label>
        </div>
        <button type="submit" style={{background:"#3366ff",color:"#fff",border:"none",borderRadius:"0.7rem",padding:"0.6rem 1.1rem",fontWeight:700}}>문의 보내기</button>
      </Form>
    </Layout>
  );
}
export default ContactPage;
