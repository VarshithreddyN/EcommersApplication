import React from 'react'
import { productdata } from '../data'
import styled from 'styled-components'
import ProductItems from './ProductItems'
const Container= styled.div`
background-color:white;
pading:10px;
display:flex;
flex-wrap:wrap;
align-item:center;
justify-content:center;
`
const Products = () => {
  return (
    <Container>
      
      {
      productdata.map((item)=>(
        <ProductItems item={item} key={item.id}/>
))    }
    </Container>
  )
}

export default Products
