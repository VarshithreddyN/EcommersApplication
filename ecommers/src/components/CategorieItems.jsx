
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
background-color:grey;
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Fit the entire image within the container */
  object-position: center; 
`;
const Tittle=styled.h1`
font-size: 24px; /* Adjust the font size as needed */
color: #DBE2EF; /* Change the text color as needed */
margin-bottom: 10px; /* Add margin if necessary */
&:hover {
  color: #007bff; /* Change the text color on hover */
}

`
const Info =styled.p`
position:absolute;
width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  top:0px;
  left:0px;
  flex-direction: column;
  
  
`
const Button =styled.button`
display: inline-block;
padding: 10px 20px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
background-color: #8EACCD ;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease, transform 0.2s ease;

&:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

&:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

`
const CategorieItems = ({item}) => {
  return (
    <Container>
      
      <Image src={item.img}/>
      
      <Info>
        <Tittle>{item.tittle}</Tittle>
        <Button>SHOW MORE</Button>
      </Info>
    </Container>
  )
}

export default CategorieItems
