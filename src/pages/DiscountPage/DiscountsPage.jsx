import React from "react"
import { Link } from "react-router-dom"
import { withLayout } from "../../layout/Layout"
import * as Assets from "../../assets"
import * as Styles from "./DiscountsPage.styles"

const NewsCard = ({ link, imageSrc, altText }) => (
  <Link to={link}>
    <img src={imageSrc} alt={altText} />
  </Link>
)

function DiscountsPage() {
  return (
    <>
      <Styles.StyledDiscountPage>
        <Styles.MainBackgroundHandler />
        <Styles.DiscountTitle>
          <h2>Продукция экомилк в Globus!</h2>
          <p>
            Листай вниз, узнай больше <img src={Assets.ArrowDown} alt="Стрелка вниз" />
          </p>
        </Styles.DiscountTitle>
      </Styles.StyledDiscountPage>
      <Styles.AboutProduct>
        <p>
          С проверенными продуктами готовить одно удовольствие. Они не подведут, они гарантируют
          результат. Именно поэтому они вдохновляют на новые кулинарные свершения. Молочные продукты
          под торговой маркой «ЭКОМИЛК» – те самые продукты, которые уже много лет занимают свое
          почетное место в холодильниках и ведут хозяек на новые кулинарные подвиги.
        </p>

        <img src={Assets.SalesInfo} alt="Sale image" />
      </Styles.AboutProduct>
      <Styles.NewsRecommendations>
        <h1>ПОХОЖИЕ НОВОСТИ</h1>
        <section>
          <NewsCard
            link="/news"
            imageSrc={Assets.FirstInfoCard}
            altText="Первая информационная карточка"
          />
          <NewsCard
            link="/news"
            imageSrc={Assets.SecondInfoCard}
            altText="Вторая информационная карточка"
          />
          <NewsCard
            link="/news"
            imageSrc={Assets.FirstInfoCard}
            altText="Третья информационная карточка"
          />
        </section>
      </Styles.NewsRecommendations>
    </>
  )
}

export default withLayout(DiscountsPage)
