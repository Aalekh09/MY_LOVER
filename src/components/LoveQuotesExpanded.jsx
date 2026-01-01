import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './LoveQuotesExpanded.css'

const LoveQuotesExpanded = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  const loveQuotes = [
    {
      text: "Kya tumhe yaad hai woh pehli baar jab tumne haath pakda tha mera? Mujhe laga, zindagi bhar ka sukoon mil gaya.",
      author: "Aalekh",
      emoji: "💕"
    },
    {
      text: "Kabhi socha nahi tha ki pyaar is tarah se zindagi ka hissa banega, jaise sanson mein bas gaya ho tu.",
      author: "Aalekh",
      emoji: "💖"
    },
    {
      text: "Tum meri life ka wo hissa ban chuki ho jiske bina main soch bhi nahi sakta zindagi ko.",
      author: "Aalekh",
      emoji: "💗"
    },
    {
      text: "Har din tumhare saath bitana, har pal tumhare saath jeena - yeh hai meri sabse badi khushi.",
      author: "Aalekh",
      emoji: "💝"
    },
    {
      text: "Tumhari muskaan meri duniya ko roshan kar deti hai. Tumhari khushi hi meri khushi hai.",
      author: "Aalekh",
      emoji: "💘"
    },
    {
      text: "Tumhare bina har din adhoora lagta hai, aur tumhare saath har pal poora lagta hai.",
      author: "Aalekh",
      emoji: "💕"
    },
    {
      text: "In your smile, I see something more beautiful than the stars.",
      author: "Aalekh",
      emoji: "✨"
    },
    {
      text: "You are my today and all of my tomorrows.",
      author: "Aalekh",
      emoji: "🌅"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % loveQuotes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [loveQuotes.length])

  const currentQuote = loveQuotes[currentQuoteIndex]

  return (
    <motion.div
      className="love-quotes-expanded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="quotes-header">
        <FaHeart className="quotes-icon" />
        <h3>Love Quotes</h3>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuoteIndex}
          className="quote-card-expanded"
          initial={{ opacity: 0, x: 50, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -50, rotateY: -90 }}
          transition={{ duration: 0.6 }}
        >
          <FaQuoteLeft className="quote-mark quote-left" />
          <div className="quote-emoji">{currentQuote.emoji}</div>
          <p className="quote-text-expanded">{currentQuote.text}</p>
          <div className="quote-author">
            <span className="author-dash">—</span>
            <span className="author-name">{currentQuote.author}</span>
          </div>
          <FaQuoteRight className="quote-mark quote-right" />
        </motion.div>
      </AnimatePresence>

      <div className="quote-indicators">
        {loveQuotes.map((_, index) => (
          <motion.button
            key={index}
            className={`quote-dot ${index === currentQuoteIndex ? 'active' : ''}`}
            onClick={() => setCurrentQuoteIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default LoveQuotesExpanded

