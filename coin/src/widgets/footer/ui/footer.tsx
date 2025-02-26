import styled from "styled-components";

const Container = styled.div`
  color: white;
  font-size: 1rem;
  margin: auto;
`;

export default function Footer() {
  return (
    <Container>
      오늘의 코인 푸터 <br />
      각자 깃허브 주소,사이트맵, 소개글
      <br />
      /exchange, /main , /login 있습니다.
    </Container>
  );
}
