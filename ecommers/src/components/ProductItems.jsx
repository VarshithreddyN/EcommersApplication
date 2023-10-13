
import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const Info =styled.div`
opacity:0;
display:flex;
z-index: 2;
flex-direction:row;
align-items:center;
justify-content:center;
position:absolute;
width:100%;
height:100%;
top:0;
left:0;


`
const Container= styled.div`
background-color:#FFF2D8;
pading:10px;
flex:1;
min-width:280px;
height:250px;
margin:5px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
position:relative;
 &:hover .Icon {
    background-color: blue; // Change this to your desired hover color
    color: white;
  }
  &:hover {
    background-color: #BCA37F; // Change this to your desired hover color
    color: blue;
  }
&:hover ${Info}
{
 opacity:2;
}`
const Circle =styled.div`
 
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`
const Image=styled.img`
    height:75%;
    postion:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    z-index:1;
`

const Icon= styled.div`
width:30px;
height:30px;
display:flex;

border-radius:50%;
background-color:#BCA37F;
margin:10px;
align-items:center;
justify-content:center;
transition: background-color 0.3s, color 0.3s; // Add transition for smooth color change

&:hover {
  background-color: #ff5733; // Change this to your desired hover color
  color: blue;
}

`
const Button = styled.button`
  margin: 10px;
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


const ProductItems = ({item}) => {
  return (
    <Container>
        {/* <Circle/> */}
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
            <Button>LOOK MORE</Button>
        </Info>
        
      
    </Container>
  )
}

export default ProductItems
