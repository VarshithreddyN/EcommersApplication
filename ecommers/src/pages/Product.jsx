import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container=styled.div``
const Wrapper=styled.div ` 
padding:30px;
display:flex;`
const Imagecontainer=styled.div` 
flex:1;
width:50%;
display:flex;
flex-wrap:wrap;`

const Image=styled.img`flex-wrap:wrap;
width:100%`
const Infocontainer=styled.div`
flex:1;
padding:30px;`
const Tittle= styled.h2`font-family:250`
const Description= styled.p`margin:10px;`
const Price=styled.span`margin:10px;
font-weight:300;
font-size:30px;`
const FilterContent=styled.div`
    display:flex;
    justify-content:space-between;
    `
 const Filter= styled.div` display:flex; align-items:center;justify-content:center;  padding:0px;   `
 const FilterText= styled.h3`padding:5px; margin-top:20px;`
 const Select=styled.select `background-color:lightgrey ;border-radius:5%;padding:2px;margin:3px;`
 const Option=styled.option` padding:2px`
const Amountconatainer=styled.div` display:flex; flex-direction:row ;margin-top:15px; `
const Amount= styled.span`margin:0px 20px 0px 20px;padding:3px; border:dotted ; border-radius:30% ;`
const Button = styled.button`
margin: 5px 10px 0px 20px;
display: inline-block;
padding: 4px 8px;
font-size: 10px;
text-align: center;
text-decoration: none;
border-radius: 5px;
background-color: #3498db;
color: #fff;
border: 2px solid #2980b9;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease, transform 0.1s ease;
cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Imagecontainer><Image src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1200"/></Imagecontainer>
        <Infocontainer>
            <Tittle>Dusty Black T Shirt</Tittle>
            
            <Description>Great! A black t-shirt can be a versatile and timeless wardrobe staple for both men and women. It can be dressed up or down, making it a versatile choice for various occasions. Consider the fit, fabric, and style when choosing a black t-shirt to ensure it meets your needs.</Description>
            <Price>$199</Price>
            <FilterContent>
        <Filter><FilterText>COLOR</FilterText>
        <Select><Option disabled>Color</Option>
        <Option>Red</Option>
        <Option>Yellow</Option>
        <Option>Blue</Option>
        <Option>Green</Option>
        <Option>Black</Option>
        <Option>other</Option>
        </Select>
        <FilterText>SIZE</FilterText>
        <Select><Option disabled>Size</Option>
        <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
        <Option>Customized</Option>
        </Select> 
        </Filter>
        </FilterContent>
        <Amountconatainer>
           
            <AddIcon/>
            <Amount>1</Amount>
            <RemoveIcon/>
            <Button>Add to Cart</Button>
        </Amountconatainer>
        </Infocontainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
