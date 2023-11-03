import React from "react"
import styled from "styled-components"
import { Button } from "../button/Button"
import { CardImage } from "./CardImage"
import { useNavigate } from "react-router-dom"

export const Item = ({ title, titlePercent, colorCard, width, height, image }) => {
  let navigate = useNavigate()

  const hadleNavigateToProductPage = (productTitle) => {
    navigate(`/product-info?title=${encodeURIComponent(productTitle)}`)
  }

  return (
    <ContainerItem className={colorCard} id={colorCard}>
      <CardImage width={width} height={height} image={image} />
      <NameCatalog className={titlePercent}>
        {titlePercent ? (
          <h3>{titlePercent}</h3>
        ) : (
          <>
            <h3>{title}</h3>
            <Button color={colorCard} onClick={() => hadleNavigateToProductPage(title)}>
              Узнать подробнее
            </Button>
          </>
        )}
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
    display: ${(props) => (props.id === "#B5CB07" ? "inline-block" : "none")};
    content: url("/public/flower.svg");
    position: absolute;
    left: -40px;
    bottom: -80px;
  }
  & ::after {
    display: ${(props) => (props.id === "#B5CB07" ? "inline-block" : "none")};
    content: url("/public/flower.svg");
    position: absolute;
    bottom: 500px;
    right: -35px;
  }
`

const NameCatalog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  align-items: center;
  position: absolute;
  bottom: ${(props) => (props.className ? "60px" : "20px")};

  & h3 {
    font-size: 28px;
    color: #ffffff;
    font-weight: 800px;
    text-align: center;
    line-height: 22.3px;
  }

  & button {
    font-size: 18px;
    font-weight: 600px;
    line-height: 34.3px;
  }
`
