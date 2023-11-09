import React from "react"
import styled from "styled-components"

import { useCategoryMilk } from "../../hooks/useCategoryMilk"
import { cardItems } from "../../utils/constants"
import { CardImage } from "../UI/card/CardImage"

const ProductCover = () => {
  const { category } = useCategoryMilk()
  const newProduct = cardItems.find((item) => item.title === category)

  return (
    <WrapperProduct className={newProduct.colorCard} id="catalog-cover">
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
  @media (max-width: 768px) {
    padding: 100px 80px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    padding: 50px 20px;
  }
`

const Description = styled.section`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }

  & h1 {
    font-size: 55px;
    font-weight: 800;
    line-height: 117.6px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      text-align: center;
      width: 450px;
      line-height: 50.6px;
    }
  }
  & p {
    font-size: 18px;
    font-weight: 300;
    width: 500px;
    @media (max-width: 768px) {
      font-size: 16px;
      width: 290px;
    }
    @media (max-width: 480px) {
      width: 450px;
      font-size: 16px;
      padding-left: 10px;
    }
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
  @media (max-width: 768px) {
    width: 50%;
    transform: translate(60px, -150px);
  }
  @media (max-width: 480px) {
    width: 420px;
    height: 350px;
    transform: translate(10px, 0);
  }
  & img {
    transform: scale(1.6);
    @media (max-width: 768px) {
      width: 250px;
      transform: none;
    }
  }
`
