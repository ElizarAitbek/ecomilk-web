import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "pages/ErrorPage"
import AboutPage from "pages/AboutPage"
import CatalogPage from "pages/CatalogPage"
import DiscountsPage from "pages/DiscountsPage"
import JobOpportunitiesPage from "pages/JobOpportunitiesPage"
import NewsPage from "pages/NewsPage"
import App from "../App"

export const app_routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/dicounts",
    element: <DiscountsPage />,
  },
  {
    path: "/jobs",
    element: <JobOpportunitiesPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
])
