import React from "react"
import styled from "styled-components"
import { WhiteMilk } from "../../../assets/index"

export const CardImage = ({ image, width, height }) => {
  return (
    <>
      <Milk src={WhiteMilk} alt="milk" />
      <Image src={image} alt="catalog-milks" width={width} height={height} />
    </>
  )
}

const Image = styled.img`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translate(0, -40px);
  z-index: 1;
`

const Milk = styled.img`
  position: absolute;
  right: -80px;
  width: 550px;
  transform: translate(0, -40px);
`
