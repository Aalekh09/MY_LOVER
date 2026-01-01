import { Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import LetterPage from './pages/LetterPage'
import PromisesPage from './pages/PromisesPage'
import StoryPage from './pages/StoryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/letter" element={<LetterPage />} />
      <Route path="/promises" element={<PromisesPage />} />
      <Route path="/story" element={<StoryPage />} />
    </Routes>
  )
}

export default App

