import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommercialCleaning from "./pages/CommercialWashingPage";
import OurStory from "./pages/OurStoryPage";
import ResidentialCleaning from "./pages/ResidentialCleaningPage";
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router basename="/sam-car-wash">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
        <Route path="/commercial-washing" element={<CommercialCleaning />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </Router>
  )
}

export default App
