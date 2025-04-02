import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommercialCleaning from "./pages/CommercialWashingPage";
import OurStory from "./pages/OurStoryPage";
import ResidentialCleaning from "./pages/ResidentialCleaningPage";
import HomePage from './pages/HomePage';
import Blogs from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import GetQuotePage from "./pages/GetQuotePage";

function App() {
  return (
    <Router basename="/stone-carpet-solutions">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
        <Route path="/commercial-washing" element={<CommercialCleaning />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
      </Routes>
    </Router>
  )
}

export default App
