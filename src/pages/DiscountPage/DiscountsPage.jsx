import React from "react"
import { withLayout } from "../../layout/Layout"
import { ArrowDown, MainBg, SalesInfo } from "../../assets"
import styled from "styled-components"
import News from "components/news-block/News"

function DiscountsPage() {
  return (
    <div>
      <StyledDiscountPage>
        <MainBackgroundHandler />
        <DiscountTitle>
          <h2>Продукция экомилк в Globus!</h2>
          <p>
            Листай вниз, узнай больше <img src={ArrowDown} alt="Стрелка вниз" />
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
      <News title="похожие новости" />
    </div>
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

const AboutProduct = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 70px;
  margin-bottom: 180px;
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
