import React from "react"
import styled from "styled-components"
import { useCategoryMilk } from "../../hooks/useCategoryMilk"
import { cardItems } from "../../utils/constants"

export const CatalogCard = ({ packageName, fatPercentage, liter, day }) => {
  const { category } = useCategoryMilk()
  const newCategory = cardItems.find((item) => item.title === category)

  return (
    <CatalogContainer>
      <InfoAboutProduct className={newCategory?.colorCard}>
        <li>
          Вид упаковки <span>{packageName}</span>
        </li>
        <li>
          Содержание жира <span>{fatPercentage}</span>
        </li>
        <li>
          Срок хранения
          <span>{day}</span>
        </li>
        <li>
          Объем
          <span>{liter}</span>
        </li>
      </InfoAboutProduct>
      <InformationDegree> Хранить при температуре от +2°C до +6°C</InformationDegree>
    </CatalogContainer>
  )
}
const CatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
`
const InfoAboutProduct = styled.ul`
  list-style: none;

  & li {
    width: 781px;
    height: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-size: 24px;
    font-weight: 800px;
    color: #242424;
  }
  & li:nth-of-type(2n + 1) {
    background-color: ${(props) => props.className};
    color: #fff;
  }
`
const InformationDegree = styled.p`
  color: #b5b5b5;
  font-size: 24px;
  font-weight: 300;
`