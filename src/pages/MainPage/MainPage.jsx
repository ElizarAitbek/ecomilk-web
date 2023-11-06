import About from "components/about/About"
import MainSlider from "components/main-slider/MainSlider"
import News from "components/news-block/News"
import Vacancies from "../../components/vacancies/Vacancies"
import { AllProductList } from "../../components/all-products/AllProductList"

export default function MainPage() {
  return (
    <>
      <div id="home">
        <MainSlider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="news">
        <News title="новости" />
      </div>
      <div id="catalog">
        <AllProductList title="Каталог" />
      </div>
      <div id="vacancies">
        <Vacancies />
      </div>
    </>
  )
}