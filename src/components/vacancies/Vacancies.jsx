import styled from "styled-components"
import { VacancyImage } from "../../assets"
import { Button } from "../UI/button/Button"

const DUMMY_DATA = [
  {
    id: 1,
    title: "В ЭКОМИЛК ТРЕБУЮТСЯ ДИСТРИБЬЮТОРЫ!",
    image: VacancyImage,
  },
  {
    id: 2,
    title: "ИЩЕМ ГРАФИЧЕСКОГО ДИЗАЙНЕРА!",
    image: VacancyImage,
  },
  {
    id: 3,
    title: "В ЭКОМИЛК ТРЕБУЮТСЯ ДИСТРИБЬЮТОРЫ!",
    image: VacancyImage,
  },
  {
    id: 4,
    title: "ИЩЕМ ГРАФИЧЕСКОГО ДИЗАЙНЕРА!",
    image: VacancyImage,
  },
]

export default function Vacancies() {
  return (
    <VacancyBlock>
      <h2>вакансии</h2>

      <VacancyCard>
        {DUMMY_DATA.map((item) => (
          <CardItem key={item.id}>
            <h5>{item.title}</h5>
            <Button color="#000">Узнать подробнее</Button>
          </CardItem>
        ))}
      </VacancyCard>
    </VacancyBlock>
  )
}
const VacancyBlock = styled.div`
  text-align: center;
  h2 {
    font-size: 90px;
    margin: 60px;
    text-transform: uppercase;
  }
`
const VacancyCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`
const CardItem = styled.section`
  background: url(${VacancyImage});
  background-size: cover;
  width: 320px;
  height: 500px;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h5 {
    color: var(--white, #fff);
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
`