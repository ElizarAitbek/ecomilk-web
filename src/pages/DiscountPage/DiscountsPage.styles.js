import styled from "styled-components"
import { MainBg } from "../../assets"

export const StyledDiscountPage = styled.main`
  padding-top: 100px;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
`
export const DiscountTitle = styled.section`
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
export const MainBackgroundHandler = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: url(${MainBg}) no-repeat center;
  background-size: cover;
  z-index: -1;
  filter: blur(6px);
`

export const NewsRecommendations = styled.div`
  margin-top: 190px;
  text-align: center;
  h1 {
    font-size: 100px;
    margin-bottom: 60px;
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

export const AboutProduct = styled.div`
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
