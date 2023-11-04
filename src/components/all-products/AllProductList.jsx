import React from "react"
import styled from "styled-components"
import { cardItems } from "../../utils/constants.js"
import { Card } from "../UI/card/Card.jsx"

export const AllProductList = () => {
  return (
    <Wrapper>
      {cardItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 1920px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 35px;
  grid-row-gap: 43px;
  padding: 0 80px;
`
