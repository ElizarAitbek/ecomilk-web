import styled from "styled-components"
import Header from "./layout/header/Header"

export default function App() {
  return (
    <StyledLayoutMain>
      <Header />
      <h1>Hello</h1>
    </StyledLayoutMain>
  )
}
const StyledLayoutMain = styled.div`
  max-width: 1920px;
  height: 100vh;
  padding: 0 80px;
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr;
`
