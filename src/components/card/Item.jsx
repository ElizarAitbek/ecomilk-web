import React from "react"
import styled from "styled-components"
import { WhiteMilk } from "../../assets/img"
import { Button } from "../button/Button"

export const Item = ({ image, title, colorCard, width, height, id }) => {
  return (
    <ContainerItem className={colorCard} id={id}>
      <Milk src={WhiteMilk} alt="milk" />
      <Image src={image} alt="catalog-milks" width={width} height={height} />
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

  & ::before {
    display: ${(props) => (props.id === 2 ? "inline-block" : "none")};
    content: url("/public/flower.svg");
    position: absolute;
    left: -40px;
    bottom: -70px;
  }
  & ::after {
    display: ${(props) => (props.id === 2 ? "inline-block" : "none")};
    content: url("/public/flower.svg");
    position: absolute;
    bottom: 520px;
    right: -35px;
  }
`

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
