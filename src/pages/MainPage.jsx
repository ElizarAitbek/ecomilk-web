import React from "react"
import styled from "styled-components"
import { MainBg } from "../assets"

export default function MainPage() {
  return (
    <StyledMainPage>
      <MainBackgroundHandler></MainBackgroundHandler>
      MainPage
    </StyledMainPage>
  )
}
const StyledMainPage = styled.main`
  padding-top: 100px;
  height: 100vh;
  position: relative;
`
const MainBackgroundHandler = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3) url(${MainBg}) no-repeat center;
  background-size: cover;
  z-index: -1;
  filter: blur(10px);
  -webkit-filter: blur(10px);
`
