import React, { useState } from 'react';
import styled from 'styled-components';

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
`;

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

const HandWave = styled.div`
  font-size: 30px;
  animation: wave 2s infinite;
  margin-top: 20px;

  @keyframes wave {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleCreateAccount = () => {
    setSubmitted(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="Phone" placeholder="Phone Number" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I am aware of the <b>Privacy Policy</b>.
          </Agreement>
          <Agreement>Alraedy User?<b><i> Login</i></b></Agreement>
          <Button onClick={handleCreateAccount}>Create Account</Button>
          {submitted && <HandWave>👋</HandWave>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
