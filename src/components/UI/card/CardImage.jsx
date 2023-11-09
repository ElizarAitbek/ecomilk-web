import React from "react"
import styled from "styled-components"
import { WhiteMilk } from "../../../assets/index"

export const CardImage = ({ image, width, height }) => {
  return (
    <>
      <Milk src={WhiteMilk} className="milk" alt="milk" />
      <Image className="products" src={image} alt="catalog-milks" width={width} height={height} />
    </>
  )
}

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translate(0, -40px);
  z-index: 1;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 310px;
    height: 400px;
    object-fit: contain;
  }
`

const Milk = styled.img`
  position: absolute;
  width: 390px;
  transform: translate(0, -20px);
`
