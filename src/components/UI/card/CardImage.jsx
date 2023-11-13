import styled from "styled-components"
import React from "react"

import { motion } from "framer-motion"
import { WhiteMilk } from "../../../assets/index"

export const CardImage = React.forwardRef(({ image, width, height }, ref) => {
  return (
    <>
      <Milk ref={ref} src={WhiteMilk} alt="milk" />
      <Image ref={ref} src={image} alt="catalog-milks" width={width} height={height} />
    </>
  )
})
CardImage.displayName = "CardImage"

export const MImage = motion(CardImage)

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translate(0, -40px);
  z-index: 1;

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
`
export const MCardImage = motion(CardImage)
