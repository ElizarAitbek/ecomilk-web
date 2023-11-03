import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import LoadingIndicator from "../components/loader/Loader"

const ErrorPage = lazy(() => import("pages/ErrorPage"))
const AboutPage = lazy(() => import("pages/AboutPage"))
const CatalogPage = lazy(() => import("pages/CatalogPage"))
const DiscountsPage = lazy(() => import("pages/DiscountsPage"))
const JobOpportunitiesPage = lazy(() => import("pages/JobOpportunitiesPage"))
const NewsPage = lazy(() => import("pages/NewsPage"))
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
  },
  {
    path: "/catalog",
    element: LazyComponent(CatalogPage),
  },
  {
    path: "/discounts",
    element: LazyComponent(DiscountsPage),
  },
  {
    path: "/jobs",
    element: LazyComponent(JobOpportunitiesPage),
  },
  {
    path: "/news",
    element: LazyComponent(NewsPage),
  },
])
