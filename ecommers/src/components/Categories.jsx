import React from 'react'
import CategorieItems from './CategorieItems'
import styled from 'styled-components'
import {categories} from '../data'

const Container=styled.div`
    padding:0px;
    display:flex;
    justify-content: space-between;
    
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map((item)=>(
                <CategorieItems item={item} key={item.id}/>
            ))      

        }

    </Container>
  )
}

export default Categories
