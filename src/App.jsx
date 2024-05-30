import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
