import styled from "styled-components"
import { withLayout } from "../layout/Layout"
import { ArrowDown, MainBg, FirstInfoCard, SecondInfoCard, SalesInfo } from "../assets"
import { Link } from "react-router-dom"

function DiscountsPage() {
  return (
    <>
      <StyledDiscountPage>
        <MainBackgroundHandler></MainBackgroundHandler>
        <DiscountTitle>
          <h2>Продукция экомилк в Globus!</h2>
          <p>
            Листай вниз узнай больше <img src={ArrowDown} alt="arrow down svg" />
          </p>
        </DiscountTitle>
      </StyledDiscountPage>
      <AboutProduct>
        <p>
          С проверенными продуктами готовить одно удовольствие. Они не подведут, они гарантируют
          результат. Именно поэтому они вдохновляют на новые кулинарные свершения. Молочные продукты
          под торговой маркой «ЭКОМИЛК» – те самые продукты, которые уже много лет занимают свое
          почетное место в холодильниках и ведут хозяек на новые кулинарные подвиги.
        </p>
        <img src={SalesInfo} alt="Sale image" />
      </AboutProduct>
      <NewsRecomendations>
        <h1>ПОХОЖИЕ НОВОСТИ</h1>
        <section>
          <Link to="/news">
            <img src={FirstInfoCard} alt="First info card" />
          </Link>

          <Link to="/news">
            <img src={SecondInfoCard} alt="Second info card" />
          </Link>
          <Link to="/news">
            <img src={FirstInfoCard} alt="Third info card" />
          </Link>
        </section>
      </NewsRecomendations>
    </>
  )
}

export default withLayout(DiscountsPage)

const StyledDiscountPage = styled.main`
  padding-top: 100px;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
`
const DiscountTitle = styled.section`
  color: #fff;
  margin-top: 160px;
  margin-left: 100px;
  h2 {
    font-size: 80px;
    width: 750px;
  }
  p {
    font-size: 24px;
  }
`
const MainBackgroundHandler = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: url(${MainBg}) no-repeat center;
  background-size: cover;
  z-index: -1;
  filter: blur(6px);
`

const NewsRecomendations = styled.div`
  margin-top: 190px;
  text-align: center;
  h1 {
    font-size: 100px;
    margin-bottom: 60px;
  }

  section {
    display: flex;
    justify-content: space-evenly;
  }
  img {
    border-radius: 10px;
    width: 400px;
    object-fit: cover;
  }
`

const AboutProduct = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 70px;
  gap: 200px;
  p {
    width: 440px;
    font-size: 30px;
    line-height: 35px;
    font-family: "Gilroy-Light", sans-serif;
    margin-top: 100px;
  }

  img {
    width: 650px;
    border-radius: 10px;
  }
`
