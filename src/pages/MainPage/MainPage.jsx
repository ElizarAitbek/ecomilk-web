import About from "components/about/About"
import MainSlider from "components/main-slider/MainSlider"
import News from "components/news-block/News"
import Vacancies from "../../components/vacancies/Vacancies"

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
      <div id="discounts">Тут будет блок с акциями или каталогом.</div>
      <div id="vacancies">
        <Vacancies />
      </div>
    </>
  )
}
