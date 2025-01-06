import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import InputPage from "./Pages/InputPage"
import AnalyticPageAge from "./Pages/AnalyticPageAge"
import AnalyticPageLocation from "./Pages/AnalyticPageLocation"
import AnalyticPageDay from "./Pages/AnalyticPageDay"
import AnalyticPageType from "./Pages/AnalyticPageType"

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<InputPage />} />
        <Route path='/analytic/age' element={<AnalyticPageAge />} />
        <Route path='/analytic/location' element={<AnalyticPageLocation />} />
        <Route path='/analytic/day' element={<AnalyticPageDay />} />
        <Route path='/analytic/type' element={<AnalyticPageType />} />
      </Routes>
     </Router>
    </>
  )
}

export default App