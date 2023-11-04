import { InfoProduct } from "../components/info-product/InfoProduct"
import { Card } from "../components/UI/card/Card"
import { useCategoryMilk } from "../hooks/useCategoryMilk"
import { withLayout } from "../layout/Layout"

function PruductInfoPage() {
  const { category } = useCategoryMilk()
  return (
    <>
      {category ? <InfoProduct /> : null}
      <Card />
    </>
  )
}

export default withLayout(PruductInfoPage)
