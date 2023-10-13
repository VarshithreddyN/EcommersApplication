
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import styled from 'styled-components';

const Container =styled.div`
    margin:20px;
    height :50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;    
`
const Tittle =styled.h1`
    font-size:50px;
    margin-top:100px;    
`
const Description =styled.div`
font-size:25px;
font-family:bold;    
margin-bottom:20px;
`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid;
`
const Input =styled.input`
flex:7;
background-color:#EAD7BB;
`

const Button =styled.button``

const Newsletter = () => {
  return (
    <Container>
        <Tittle>NEWS LETTER</Tittle>
        <Description>Get new update over new products and about the best offers</Description>
        <InputContainer>    
        <Input type= 'mail' placeholder='E Mail'/>
        <Button><SendIcon/></Button>
        
        </InputContainer>
      
    </Container>
  )
}

export default Newsletter
