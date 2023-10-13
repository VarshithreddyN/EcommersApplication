import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
 const Container=styled.div``
 const Tittle=styled.h1``
 const FilterContent=styled.div`
    display:flex;
    justify-content:space-between;
    `
 const Filter= styled.div` display:flex; align-items:center;justify-content:center;  padding:0px;   `
 const FilterText= styled.h2`padding:5px;`
 const Select=styled.select `background-color:lightgrey ;border-radius:5%;padding:2px;margin:3px;`
 const Option=styled.option` padding:2px`



const Productlist = () => {
  return (
    <Container>
       <Navbar/>
       <Announcement/>
       <Tittle>OUTFIT</Tittle>
       <FilterContent>
        <Filter><FilterText>Filter</FilterText>
        <Select><Option disabled>Color</Option>
        <Option>Red</Option>
        <Option>Yellow</Option>
        <Option>Blue</Option>
        <Option>Green</Option>
        <Option>Black</Option>
        <Option>other</Option>
        </Select>
        <Select><Option disabled>Size</Option>
        <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
        <Option>Customized</Option>
        </Select> 
        </Filter>
        <Filter><FilterText>Sort</FilterText>
        <Select><Option disabled>Newest</Option>
        <Option>PRICE:LOW -TO- HIGH</Option>
        <Option>PRICE:HIGH -TO- LOW</Option>
        <Option>MAXIMUM OFFER</Option>
        <Option>RELEVANCE</Option>
        
      
        </Select></Filter>
       </FilterContent>
       <Products/>
       <Newsletter/>
       <Footer/>
    </Container>
  )
}

export default Productlist
