import styled from "styled-components"

// TODO: Переписать на Link при подключении роутинга

export const Header = () => {
  return (
    <StyledHeaderMain>
      <a href="/">
        <img src="/logo.svg" alt="ecomilk logo" />
      </a>

      <StyledHeaderNav>
        <a href="#">Главная</a>
        <a href="#">О компании</a>
        <a href="#">Новости</a>
        <a href="#">Акции</a>
        <a href="#">Каталог</a>
        <a href="#">Вакансии</a>
      </StyledHeaderNav>

      <StyledHeaderButton>Позвонить нам</StyledHeaderButton>
    </StyledHeaderMain>
  )
}

const StyledHeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 61px;
  img {
    width: 60px;
  }
  background-color: grey;
`
const StyledHeaderNav = styled.nav`
  display: flex;
  gap: 90px;
  a {
    font-size: 1.25rem;
    color: #fff;
    transition: all 0.3s;
  }
  a:hover {
    color: #000;
  }
`

const StyledHeaderButton = styled.button`
  width: 200px;
  border: none;
  font-weight: 800;
  font-size: 1.25rem;
  border-radius: 16px;
  height: 50px;
  padding: 10px 13px;
  color: #fff;
  background-color: #4267a4;
  transition: all 0.3s;
  &:hover {
    background-color: #ffffff;
    color: #000;
  }
`
