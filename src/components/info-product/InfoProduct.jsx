import React from "react"
import styled from "styled-components"
import { useCategoryMilk } from "../../hooks/useCategoryMilk"

import { Item } from "../UI/card/Item"
import { CatalogCard } from "./CatalogCard"
import { catalogItem } from "../../utils/constants"

export const InfoProduct = () => {
  const { category } = useCategoryMilk()
  const newCatalogItem = catalogItem.find((item) => item.name === category)

  console.log(newCatalogItem)
  return (
    <WrapperProductInfo>
      <CatalogTitle>Каталог</CatalogTitle>
      <ContainerForImgCard>
        <ContainerImage>
          {newCatalogItem?.additionalImg?.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ContainerImage>
        <CatalogCard {...newCatalogItem} />
      </ContainerForImgCard>
    </WrapperProductInfo>
  )
}

const WrapperProductInfo = styled.div`
  max-width: 1920px;
  margin-bottom: 50px;
`

const ContainerForImgCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`

const CatalogTitle = styled.h1`
  text-align: center;
  font-size: 100px;
  font-weight: 800;
`

const ContainerImage = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  & h3 {
    padding-bottom: 20px;
  }
`
