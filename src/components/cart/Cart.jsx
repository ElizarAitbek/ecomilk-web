import React from "react"
import styled from "styled-components"
import { cartItems } from "../../utils/constants.js"
import { Item } from "./Item"

export const Cart = () => {
  return (
    <Wrapper>
      {cartItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 35px;
  grid-row-gap: 43px;
  margin: 0 auto;
`
