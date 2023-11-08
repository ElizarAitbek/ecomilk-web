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
  z-index: 3;
  top: 20px;
  max-width: 1920px;
  width: 100%;

  img {
    width: 60px;
  }

  @media (max-width: 1200px) {
    margin: auto;
    padding: 0 40px;
    img {
      width: 50px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    width: 100%;
    img {
      display: none;
      width: 40px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    img {
      width: 30px;
    }
  }
`
const StyledHeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
  a {
    font-size: 1.25rem;
    color: #fff;
    transition: all 0.3s;
  }
  a:hover {
    color: #000;
  }
  @media (max-width: 1170px) {
    gap: 45px;
  }
  @media (max-width: 973px) {
    gap: 30px;
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 870px) {
    gap: 27px;
    a {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    gap: 60px;
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    gap: 30px;
    a {
      font-size: 0.875rem;
    }
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
  @media (max-width: 870px) {
    display: none;
  }
`
