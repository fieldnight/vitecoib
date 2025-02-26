import styled from "styled-components";
import { Footer } from "../widgets";

export default function LoginPage() {
  return (
    <Container>
      <LoginContainer>
        <LoginTitle>오늘의 코인</LoginTitle>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Button>로그인</Button>
      </LoginContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(#000000 45%, #032305, #85ff2883);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  height: 25rem;
  border-radius: 2rem;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
`;
const LoginTitle = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 800;
`;
const Input = styled.input`
  filter: blur(0.2px);
  background-color: rgba(255, 255, 255, 0.716);
  border: none;
  border-radius: 0.5rem;
  height: 3rem;
  width: 20rem;
  padding: 0 1rem;
  box-shadow:
    inset 0px -2px 10px 2px rgb(255, 255, 255),
    0px 3px 2px 0px rgb(255, 255, 255);
  outline: 2px solid gray;

  transition: all 0.3s ease-in-out;

  &:hover {
    outline: 4px solid #a9ff98; /* 마우스를 올리면 아웃라인 색이 변경 */
  }
  &:focus {
    outline-color: #20ff4d;
  }
`;

const Button = styled.div`
  width: 20rem;
  height: 3rem;
  background-color: #a9ff98;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid #a9ff98;

  &:hover {
    background-color: #20ff4d;
    outline: 2px solid #20ff4d;
  }
`;
