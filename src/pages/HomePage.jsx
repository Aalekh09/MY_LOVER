import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaMusic, FaHome, FaBook, FaEnvelope, FaStar, FaImages } from 'react-icons/fa'
import AnniversaryCountdown from '../components/AnniversaryCountdown'
import MemoryNotes from '../components/MemoryNotes'
import RomanticMusicPlayer from '../components/RomanticMusicPlayer'
import LoveQuotesExpanded from '../components/LoveQuotesExpanded'
import Confetti from '../components/Confetti'
import './HomePage.css'

const HomePage = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [daysTogether, setDaysTogether] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const anniversaryDate = new Date('2024-06-26')
    const today = new Date()
    const daysDiff = Math.floor((today - anniversaryDate) / (1000 * 60 * 60 * 24))
    setDaysTogether(daysDiff)
  }, [])

  const loveQuotes = [
    "Kya tumhe yaad hai woh pehli baar jab tumne haath pakda tha mera? Mujhe laga, zindagi bhar ka sukoon mil gaya.",
    "Kabhi socha nahi tha ki pyaar is tarah se zindagi ka hissa banega, jaise sanson mein bas gaya ho tu. Tere bina sab kuch adhoora lagta hai, aur tere saath sab kuch poora.",
    "Tum meri life ka wo hissa ban chuki ho jiske bina main soch bhi nahi sakta zindagi ko. Tum ho toh sab kuch hai.",
    "Har din tumhare saath bitana, har pal tumhare saath jeena - yeh hai meri sabse badi khushi.",
    "Tumhari muskaan meri duniya ko roshan kar deti hai. Tumhari khushi hi meri khushi hai.",
    "Tumhare bina har din adhoora lagta hai, aur tumhare saath har pal poora lagta hai."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [loveQuotes.length])

  const navCards = [
    {
      icon: <FaBook />,
      title: 'Our Story',
      description: 'The beautiful beginning of us',
      link: '/story',
      color: '#667eea'
    },
    {
      icon: <FaEnvelope />,
      title: 'My Letter to You',
      description: 'Words from my heart',
      link: '/letter',
      color: '#e91e63'
    },
    {
      icon: <FaStar />,
      title: 'Our Dreams',
      description: 'Promises for our future',
      link: '/promises',
      color: '#ff9800'
    },
    {
      icon: <FaImages />,
      title: 'Gallery',
      description: 'Our precious moments',
      link: '/gallery',
      color: '#4ecdc4'
    }
  ]

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  useEffect(() => {
    // Show confetti on page load
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }, [])

  return (
    <div className="home-page">
      <Confetti trigger={showConfetti} />
      <div className="home-container">
        {/* Floating Hearts Background */}
        <div className="floating-hearts">
          {[...Array(10)].map((_, i) => {
            const heartEmojis = ['💖', '💕', '💗', '💝', '💘']
            return (
              <motion.div
                key={i}
                className="heart"
                initial={{ 
                  y: typeof window !== 'undefined' ? window.innerHeight : 800, 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) 
                }}
                animate={{
                  y: -100,
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  rotate: 360
                }}
                transition={{
                  duration: Math.random() * 3 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {heartEmojis[Math.floor(Math.random() * heartEmojis.length)]}
              </motion.div>
            )
          })}
        </div>

        {/* Welcome Section */}
        <motion.div
          className="welcome-section"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="welcome-content"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="welcome-heart"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <FaHeart />
            </motion.div>
            <h1 className="welcome-title">Welcome to Our Love Story</h1>
            <p className="welcome-subtitle">A journey of endless love, beautiful memories, and dreams together</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Countdown Timer */}
          <motion.div
            className="countdown-container"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <div className="countdown-card">
              <motion.div
                className="countdown-icon"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaHeart />
              </motion.div>
              <div className="countdown-number">{daysTogether}</div>
              <div className="countdown-label">Days of Love</div>
              <div className="countdown-date">Since 26 June 2024</div>
            </div>
          </motion.div>

          <motion.h1 
            className="anniversary-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            26 June 2024 → Forever
          </motion.h1>
          <motion.h2
            className="main-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Happy Anniversary, My Love ❤
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Every day with you is a celebration of love
          </motion.p>

          {/* Love Quotes Carousel */}
          <motion.div
            className="love-quotes"
            key={currentQuote}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="quote-card">
              <FaHeart className="quote-heart" />
              <p className="quote-text">{loveQuotes[currentQuote]}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Anniversary Countdown */}
        <AnniversaryCountdown />

        {/* Expanded Love Quotes */}
        <LoveQuotesExpanded />

        {/* Romantic Music Player */}
        <RomanticMusicPlayer />

        {/* Memory Notes */}
        <MemoryNotes />

        {/* Navigation Section */}
        <motion.div
          className="navigation-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Explore Our Journey</h3>
          <div className="nav-grid">
            {navCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to={card.link} className="nav-card">
                  <motion.div
                    className="nav-icon"
                    style={{ color: card.color }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <footer className="footer-text">
            Made with 💖 by your Husband
          </footer>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage

