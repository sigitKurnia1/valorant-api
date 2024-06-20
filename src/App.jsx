import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Gear from "./pages/Gear"
import Weapons from "./pages/Weapons"
import Events from "./pages/Events"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
