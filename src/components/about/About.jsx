import styled from "styled-components"
import { Landscape } from "../../assets"

export default function About() {
  return (
    <AboutCompany>
      <AboutBackgroundHandler />
      <h2>О КОМПАНИИ</h2>
      <p>
        &quot;ЭКОМИЛК&quot; - это семейная компания, которая была основана более 20 лет назад с
        простой миссией: предоставить своим клиентам самую высококачественную молочную продукцию,
        которая поддерживает их здоровье и благосостояние. Мы заботимся о каждой детали, начиная от
        ухода за животными до передовых технологий производства, чтобы обеспечить непревзойденное
        качество и вкус нашей продукции &quot;Молочные нежности&quot; убеждены, что лучшие молочные
        продукты получаются только из заботы и любви к животным и окружающей природе. Мы
        придерживаемся принципов экологически чистого производства, отслеживая каждый этап
        жизненного цикла продукта. Наше стремление к надежности и ответственности в производстве
        помогает нам сохранять доверие клиентов и поддерживать долгосрочные партнерские отношения.
      </p>
    </AboutCompany>
  )
}

const AboutCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 60px;
  color: #fff;
  width: 100%;
  height: 664px;
  aspect-ratio: 2/1;
  background: rgba(37, 37, 37, 0.6);
  position: relative;
  margin-bottom: 80px;
  h2 {
    font-size: 90px;
  }
  p {
    font-size: 24px;
    width: 80%;
    padding-bottom: 160px;
  }
`

const AboutBackgroundHandler = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background: url(${Landscape});
  background-size: cover;
`
