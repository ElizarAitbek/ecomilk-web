import React from "react"
import styled from "styled-components"
import { Button } from "../button/Button"

export const Item = ({ image, imgMilk, title, colorCard, width, height }) => {
  return (
    <ContainerItem className={colorCard}>
      <Image1 src={imgMilk} alt="" />
      <Image src={image} alt="" width={width} height={height} />
      <NameCatalog>
        <h3>{title}</h3>
        <Button color={colorCard}>Узнать подробнее</Button>
      </NameCatalog>
    </ContainerItem>
  )
}

const ContainerItem = styled.div`
  width: 373px;
  height: 594px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => props.className};
`

const Image = styled.img`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translate(0, -40px);
  z-index: 1;
`

const Image1 = styled.img`
  position: absolute;
  right: -80px;
  width: 550px;
  transform: translate(0, -40px);
`
const NameCatalog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;

  & h3 {
    font-size: 28px;
    color: #ffffff;
    font-weight: 800px;
    line-height: 22.3px;
  }

  & button {
    font-size: 18px;
    font-weight: 600px;
    line-height: 34.3px;
  }
`
