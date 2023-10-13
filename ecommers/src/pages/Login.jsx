import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://t3.ftcdn.net/jpg/04/20/48/48/240_F_420484854_hLbG4Is5gllQ5LSIbeQkDg37rkf83Web.jpg');
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Agreement = styled.p`
  font-size: 14px;
  margin: 10px 0;
  cursor:pointer

`;
const Link=styled.a`
text-decoration:underline;
cursor:pointer`

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>LOGIN</Title>
      <Form>
        
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Agreement><Link>Forget Password</Link> </Agreement>
       
        <Agreement>New User?<b><i> Register</i></b></Agreement>
        <Button> Login</Button>
       
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
