import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
  const handleScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <StyledHeaderMain>
      <Link href="/">
        <img src="/logo.svg" alt="ecomilk logo" />
      </Link>

      <StyledHeaderNav>
        <Link to="/">Главная</Link>
        <a href="#about" onClick={handleScroll}>
          О компании
        </a>
        <a href="#news" onClick={handleScroll}>
          Новости
        </a>
        <Link to="/discounts">Акции</Link>
        <a href="#catalog" onClick={handleScroll}>
          Каталог
        </a>
        <a href="#vacancies" onClick={handleScroll}>
          Вакансии
        </a>
      </StyledHeaderNav>

      <StyledHeaderButton>Позвонить нам</StyledHeaderButton>
    </StyledHeaderMain>
  )
}

const StyledHeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 80px;
  margin: auto;

  position: absolute;
  z-index: 1;
  top: 20px;
  max-width: 1920px;
  width: 100%;

  img {
    width: 60px;
  }
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
