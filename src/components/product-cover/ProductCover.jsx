import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

import { useCategoryMilk } from "../../hooks/useCategoryMilk"
import { cardItems } from "../../utils/constants"
import { MImage } from "../UI/card/CardImage"

const imageAnimation = {
  hidden: {
    y: "-40vh",
    opacity: 0,
    delay: 2,
  },
  visible: {
    y: "7vh",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      transition: {
        delay: 0.2,
      },
    },
  },
}

const ProductCover = () => {
  const { category } = useCategoryMilk()
  const newProduct = cardItems.find((item) => item.title === category)

  return (
    <WrapperProduct className={newProduct.colorCard} id="catalog-cover">
      <Description>
        <h1>{newProduct.title}</h1>
        <p>{newProduct.description}</p>
      </Description>
      <WrapperImage variants={imageAnimation} initial="hidden" whileInView="visible" exit="exit">
        <MImage image={newProduct.image} width={newProduct.width} height={newProduct.height} />
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
  align-items: center;
  justify-content: space-between;
  padding: 180px 80px;
  @media (max-width: 768px) {
    padding: 100px 50px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    padding: 50px 20px;
  }
`

const Description = styled.section`
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 200px;
    align-items: center;

    gap: 10px;
  }

  & h1 {
    font-size: 55px;
    font-weight: 800;
    line-height: 67.6px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  & p {
    font-size: 18px;
    font-weight: 300;
    width: 500px;
    position: relative;
    @media (max-width: 768px) {
      font-size: 16px;
      width: 350px;
    }
    @media (max-width: 480px) {
      width: 100%;
      font-size: 16px;
      padding-left: 10px;
    }
  }
`

const WrapperImage = styled(motion.section)`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 420px;
    height: 350px;
  }
  & img {
    transform: scale(1.6);

    @media (max-width: 768px) {
      transform: translate(20px, -50px);
    }
    @media (max-width: 480px) {
      transform: translate(0, -55px);
    }
  }
`
