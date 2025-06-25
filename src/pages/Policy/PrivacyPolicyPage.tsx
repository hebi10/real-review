import Layout from "../../components/Layout";

function PrivacyPolicyPage() {
  return (
    <Layout>
      <h1>개인정보처리방침</h1>
      <div style={{marginTop:"2rem",lineHeight:1.8, fontSize:"1.05rem"}}>
        <p>본 사이트는 회원님의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.<br/>
        <b>1. 수집항목</b>: 닉네임, 후기, 문의 내용 등<br/>
        <b>2. 이용목적</b>: 리뷰/후기 제공, 문의 답변<br/>
        <b>3. 보유기간</b>: 회원 요청 시 즉시 파기<br/>
        <b>4. 문의</b>: contact@hebisite.com</p>
        <p>보다 자세한 내용은 언제든 문의해 주세요.</p>
      </div>
    </Layout>
  );
}
export default PrivacyPolicyPage;
