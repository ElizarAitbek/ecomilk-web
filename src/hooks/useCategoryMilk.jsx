import { useSearchParams } from "react-router-dom"

export const useCategoryMilk = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const ProducMilkId = (nameProduct) => {
    setSearchParams({ categorymilk: nameProduct })
  }

  const category = searchParams.get("categorymilk")
  return {
    category,
    ProducMilkId,
  }
}
