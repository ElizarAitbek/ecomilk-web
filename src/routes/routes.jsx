import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import LoadingIndicator from "../components/loader/Loader"

const ErrorPage = lazy(() => import("pages/ErrorPage"))
const AboutPage = lazy(() => import("pages/AboutPage"))
const CatalogPage = lazy(() => import("pages/CatalogPage"))
const DiscountsPage = lazy(() => import("pages/DiscountPage/DiscountsPage"))
const JobOpportunitiesPage = lazy(() => import("pages/JobOpportunitiesPage"))
const NewsPage = lazy(() => import("pages/NewsPage"))
const ProductInfoPage = lazy(() => import("pages/PruductInfoPage"))
const App = lazy(() => import("../App"))

const LazyComponent = (Component) => (
  <Suspense fallback={<LoadingIndicator />}>
    <Component />
  </Suspense>
)

export const app_routes = createBrowserRouter([
  {
    path: "/",
    element: LazyComponent(App),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/about",
    element: LazyComponent(AboutPage),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/catalog",
    element: LazyComponent(CatalogPage),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/discounts",
    element: LazyComponent(DiscountsPage),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/jobs",
    element: LazyComponent(JobOpportunitiesPage),
    errorElement: LazyComponent(ErrorPage),
  },
  {
    path: "/news",
    element: LazyComponent(NewsPage),
  },
  {
    path: "/product-info",
    element: LazyComponent(ProductInfoPage),
  },
])
