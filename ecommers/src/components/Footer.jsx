import React from 'react'
import styled from 'styled-components'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import TagSharpIcon from '@mui/icons-material/TagSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
const Container =styled.div`
display:flex;
margin-top:100px;
`
const Left =styled.div` 
    
    flex:1;    
    display:flex;
    flex-direction:column;
    padding:20px;
    
`
const Logo =styled.h1`
margin-bottom:1px;`
const Description =styled.p`
    padding:5px;
`
const Socialcontainer =styled.div`
display:flex;
justify-content:space-between;
cursor:pointer;
`
// const Container =styled.div``
const Center =styled.div`
flex:1;   
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:20px;
`
const Right =styled.div`
flex:1;      
display:flex;
flex-direction:column;
padding:20px;

`
const List =styled.h1`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
     
`
const Items =styled.h6`
    padding:0.5px;
    margin:5px;
    font-color:red;
     
`
const Tittle= styled.h1`

display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
const Addresstitt=styled.h3`margin:0px;`
const Address= styled.div`
font-family:bold;

`


const Footer = () => {
  return (
    <Container>
      <Left><Logo>SAVANA</Logo>
      <Description>Savana is a brand that caters to pet owners who value eco-friendliness, affordability, and style when it comes to their dogs' accessories and clothing. Their commitment to sustainability, budget-consciousness, and pet well-being sets them apart in the pet fashion industry.</Description>
      <Socialcontainer>
        <FacebookSharpIcon/>
        
        <AttachEmailSharpIcon/>
        <TagSharpIcon/>
        <LocalPhoneSharpIcon/>
      </Socialcontainer>
      </Left>
      <Center>
         <List>USEFUL LINK</List>
         <Items>Accessories</Items>
         <Items>Pet Clothing</Items>
         <Items>Face Kit</Items>
         <Items>Shampoo</Items>
         <Items>Order Tracking</Items>
         <Items>Rewiew Product</Items>
         <Items>FAQ</Items>
        
         <Items>Donate</Items>
         <Items>Terms and Conditions</Items>

         </Center>
      <Right>
        <Tittle>CONTACT</Tittle>
        <Addresstitt> <HomeIcon/>   ADDRESS</Addresstitt>
        
        <Address>1-21A,SBI Road,Himal Colony,Marvapur,WestbengalStreet
 Heidenreich Camp City ANATHAPURAM VILLAGEStateDelaware     Zip Code509125
 <Addresstitt>Telephone</Addresstitt> 908.819.5022 0268 <Addresstitt>MOBILE <PhoneIcon/></Addresstitt> 253.777.9026</Address>
      </Right>
    </Container>
  )
}

export default Footer
