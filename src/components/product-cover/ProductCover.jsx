import React from "react"
import styled from "styled-components"

import { useCategoryMilk } from "../../hooks/useCategoryMilk"
import { cardItems } from "../../utils/constants"
import { CardImage } from "../UI/card/CardImage"

const ProductCover = () => {
  const { category } = useCategoryMilk()
  const newProduct = cardItems.find((item) => item.title === category)

  return (
    <WrapperProduct className={newProduct.colorCard}>
      <Description>
        <h1>{newProduct.title}</h1>
        <p>{newProduct.description}</p>
      </Description>
      <WrapperImage>
        <CardImage image={newProduct.image} />
      </WrapperImage>
    </WrapperProduct>
  )
}

export default ProductCover

const WrapperProduct = styled.div`
  background: ${(props) => props.className};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 180px 80px;
`

const Description = styled.section`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  & h1 {
    font-size: 55px;
    font-weight: 800;
    line-height: 117.6px;
  }
  & p {
    font-size: 18px;
    font-weight: 300;
    width: 500px;
  }
`

const WrapperImage = styled.section`
  width: 40%;
  height: 700px;
  display: flex;
  transform: translate(0, -100px);
  align-items: center;
  overflow: hidden;
  justify-content: center;
  & img {
    transform: scale(1.6);
  }
`
