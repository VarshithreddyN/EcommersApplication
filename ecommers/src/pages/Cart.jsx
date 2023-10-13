import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container=styled.div``
const Wrapper=styled.div`
padding:20px`
const Tittle= styled.h2` font-weight:300; font-family:ui-rounded;
text-align:center;`
const Top= styled.div`
display:flex;
align-items:center;
justify-content:space-between;`
const Topbutton= styled.button`  
 display:flex;
 justify-content:space-between;
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
}`
const Toptexts=styled.div`  
display:flex;
justify-content:space-between;`
const Toptext=styled.h4` margin:10px;`
const Bottom= styled.div``
const Info= styled.div`display:flex;
align-items: center
flex:direction:coloumn;`
const Summary= styled.div``
const Product=styled.div`
display:flex;
flex:1;`
const Imageitem=styled.div`flex:1`
const Productitem=styled.div` flex:2;
margin-left:15px;`
const Image=styled.img`
width:100%;
padding:10px;`
const Productname=styled.h4` `
const Productid=styled.h4``
const Productcolor=styled.h4``
const Productsize=styled.h4``
const Productprice=styled.h4``



function Cart() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Tittle>Your Cart</Tittle>
        <Top>
            <Topbutton>Continue Shopping</Topbutton>
            <Toptexts>
                <Toptext>Shopping-Bag(2)</Toptext>
                <Toptext>WithList(0)</Toptext>
            </Toptexts>
            <Topbutton>Quick Checkout</Topbutton>
            
        </Top>
        <Bottom>
            <Info><Product>
                <Imageitem><Image src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1200"/></Imageitem>
                <Productitem>
                    <Productname>DUSTY BLACK-T</Productname>
                    <Productid><b>ID :</b> #99122</Productid>
                    <Productsize><b>Size :</b>S</Productsize>
                    <Productcolor><b>Color :</b>Dusty black</Productcolor>
                    <Productprice><b>Cost :</b> $199</Productprice>
                    </Productitem>
                </Product></Info>
            <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Cart
