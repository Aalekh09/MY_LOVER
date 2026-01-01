import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './GalleryPage.css'

const GalleryPage = () => {
  const [filter, setFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const photos = [
    { src: 'uploads/IMG-20250623-WA0372.jpg', category: 'memories', title: 'Sweet Memory', desc: 'A moment to cherish forever', type: 'image' },
    { src: 'uploads/IMG-20250623-WA0373.jpg', category: 'special', title: 'Special Day', desc: 'Love captured in time', type: 'image' },
    { src: 'uploads/VID-20250628-WA0009.mp4', category: 'special', title: 'Beautiful Video Memory', desc: 'Our love in motion', type: 'video' },
    { src: 'uploads/IMG-20250623-WA0374.jpg', category: 'memories', title: 'Together', desc: 'Our happiness shines through', type: 'image' },
    { src: 'uploads/IMG-20250623-WA0375.jpg', category: 'special', title: 'Precious Moment', desc: 'Love in every glance' },
    { src: 'uploads/IMG-20250623-WA0376.jpg', category: 'memories', title: 'Beautiful Day', desc: 'Smiles that light up our world' },
    { src: 'uploads/IMG-20250623-WA0377.jpg', category: 'special', title: 'Adventure', desc: 'Exploring life together' },
    { src: 'uploads/IMG-20250623-WA0378.jpg', category: 'memories', title: 'Joyful Times', desc: 'Laughter fills our hearts' },
    { src: 'uploads/IMG-20250623-WA0379.jpg', category: 'special', title: 'Romantic Evening', desc: 'Love under the stars' },
    { src: 'uploads/IMG-20250623-WA0380.jpg', category: 'memories', title: 'Happy Moments', desc: 'Pure joy captured' },
    { src: 'uploads/IMG-20250623-WA0381.jpg', category: 'special', title: 'Celebration', desc: 'Celebrating our love' },
    { src: 'uploads/IMG-20250623-WA0382.jpg', category: 'memories', title: 'Tender Moment', desc: 'Gentle love shared' },
    { src: 'uploads/IMG-20250623-WA0383.jpg', category: 'special', title: 'Perfect Day', desc: 'Everything feels right' },
    { src: 'uploads/IMG-20250623-WA0384.jpg', category: 'memories', title: 'Sweet Embrace', desc: 'Warmth in your arms' },
    { src: 'uploads/IMG-20250623-WA0385.jpg', category: 'special', title: 'Magical Time', desc: 'Creating magic together' },
    { src: 'uploads/IMG-20250623-WA0386.jpg', category: 'memories', title: 'Blissful Day', desc: 'Pure happiness' },
    { src: 'uploads/IMG-20250623-WA0387.jpg', category: 'special', title: 'Dreamy Moment', desc: 'Living our dreams' },
    { src: 'uploads/IMG-20250623-WA0388.jpg', category: 'memories', title: 'Peaceful Time', desc: 'Serenity in love' },
    { src: 'uploads/IMG-20250623-WA0389.jpg', category: 'special', title: 'Wonderful Day', desc: 'Wonder in every moment' },
    { src: 'uploads/IMG-20250623-WA0390.jpg', category: 'memories', title: 'Eternal Love', desc: 'Forever and always' },
    { src: 'uploads/IMG-20250625-WA0017.jpg', category: 'special', title: 'Special Celebration', desc: 'Celebrating our love story' },
    { src: 'uploads/IMG-20250628-WA0013.jpg', category: 'memories', title: 'Sweet Memories', desc: 'Creating beautiful memories' },
    { src: 'uploads/IMG-20250628-WA0016.jpg', category: 'special', title: 'Perfect Moment', desc: 'Everything feels perfect with you' },
    { src: 'uploads/IMG-20250628-WA0018.jpg', category: 'memories', title: 'Joyful Day', desc: 'Joy radiates from our hearts' },
    { src: 'uploads/IMG-20250628-WA0019.jpg', category: 'special', title: 'Loving Embrace', desc: 'Safe in each other\'s arms' },
    { src: 'uploads/IMG-20250628-WA0020.jpg', category: 'memories', title: 'Beautiful Together', desc: 'Two hearts beating as one' },
    { src: 'uploads/IMG-20250628-WA0026.jpg', category: 'special', title: 'Precious Time', desc: 'Every moment is precious with you' },
    { src: 'uploads/IMG-20250726-WA0002.jpg', category: 'memories', title: 'Recent Memories', desc: 'Fresh moments of love' },
    { src: 'uploads/IMG-20250726-WA0003.jpg', category: 'special', title: 'New Adventures', desc: 'Starting new adventures together' },
    { src: 'uploads/IMG-20250726-WA0004.jpg', category: 'memories', title: 'Happy Times', desc: 'Happiness multiplied when shared' },
    { src: 'uploads/IMG-20250726-WA0005.jpg', category: 'special', title: 'Latest Memories', desc: 'Our love story continues' }
  ]

  const photosWithType = photos.map(photo => ({
    ...photo,
    type: photo.type || 'image'
  }))

  const filteredPhotos = filter === 'all' 
    ? photosWithType 
    : photosWithType.filter(photo => photo.category === filter)

  const openLightbox = (index) => {
    const actualIndex = photos.findIndex(p => 
      p.src === filteredPhotos[index].src
    )
    setCurrentImage(actualIndex >= 0 ? actualIndex : index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photos.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [lightboxOpen, currentImage])

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Our Beautiful Moments 📸</h1>
          <p className="gallery-subtitle">Every picture tells our love story</p>
        </motion.div>

        <div className="gallery-filters">
          {['all', 'memories', 'special'].map((filterType) => (
            <motion.button
              key={filterType}
              className={`filter-btn ${filter === filterType ? 'active' : ''}`}
              onClick={() => setFilter(filterType)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterType === 'all' ? 'All Photos' : 
               filterType === 'memories' ? 'Sweet Memories' : 
               'Special Moments'}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="photos-grid"
          layout
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.src}
                className="photo-item"
                data-category={photo.category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
              >
                {photo.type === 'video' ? (
                  <video
                    src={photo.src}
                    className="gallery-video"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                )}
                {photo.type === 'video' && (
                  <div className="video-play-icon">▶️</div>
                )}
                <div className="photo-overlay">
                  <div className="photo-info">
                    <h3>{photo.title}</h3>
                    <p>{photo.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="gallery-navigation">
          <Link to="/home" className="nav-btn">
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeLightbox}>
                <FaTimes />
              </button>
              {photos[currentImage].type === 'video' ? (
                <video
                  src={photos[currentImage].src}
                  controls
                  autoPlay
                  style={{ width: '100%', maxHeight: '70vh' }}
                />
              ) : (
                <img
                  src={photos[currentImage].src}
                  alt={photos[currentImage].title}
                />
              )}
              <div className="lightbox-info">
                <h3>{photos[currentImage].title}</h3>
                <p>{photos[currentImage].desc}</p>
              </div>
              <div className="lightbox-nav">
                <button onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button onClick={nextImage}>
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryPage

