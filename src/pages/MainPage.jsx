import React from "react"
import styled from "styled-components"
import { MainBg, HeroTitle } from "../assets"

export default function MainPage() {
  return (
    <StyledMainPage>
      <MainBackgroundHandler></MainBackgroundHandler>
      <img src={HeroTitle} alt="Main title" />
    </StyledMainPage>
  )
}
const StyledMainPage = styled.main`
  padding-top: 100px;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
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
