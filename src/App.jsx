import { withLayout } from "./layout/Layout"
import MainPage from "pages/MainPage/MainPage"

function App() {
  return (
    <div>
      <MainPage />
    </div>
  )
}

export default withLayout(App)
