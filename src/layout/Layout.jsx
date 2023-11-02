import Header from "./header/Header"
import Footer from "./footer/Footer"
import styled from "styled-components"

function Layout({ children }) {
  return (
    <StyledLayoutMain>
      <Header />
      <div>{children}</div>
      <Footer />
    </StyledLayoutMain>
  )
}

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}

const StyledLayoutMain = styled.div`
  max-width: 1920px;
  height: 100vh;
  padding: 0 80px;
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
