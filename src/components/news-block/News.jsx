import styled from "styled-components"
import { FirstInfoCard, SecondInfoCard } from "../../assets"

export default function News({ title }) {
  return (
    <NewsRecommendations>
      <h1>{title}</h1>
      <section>
        <img src={FirstInfoCard} alt="Первая информационная карточка" />
        <img src={SecondInfoCard} alt="Вторая информационная карточка" />
        <img src={FirstInfoCard} alt="Третья информационная карточка" />
      </section>
    </NewsRecommendations>
  )
}

const NewsRecommendations = styled.div`
  text-align: center;
  h1 {
    font-size: 100px;
    margin-bottom: 60px;
    text-transform: uppercase;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  img {
    border-radius: 10px;
    width: 400px;
    object-fit: cover;
  }
`
