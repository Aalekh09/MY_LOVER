import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import './LoveMeter.css'

const LoveMeter = () => {
  const [loveLevel, setLoveLevel] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      const randomLevel = Math.floor(Math.random() * 20) + 90 // 90-110%
      setLoveLevel(randomLevel)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="love-meter-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className="love-meter-header">
        <FaHeart className="love-icon" />
        <h3>Our Love Level</h3>
      </div>
      <div className="love-meter-wrapper">
        <div className="love-meter-bar">
          <motion.div
            className="love-meter-fill"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(loveLevel, 100)}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              background: `linear-gradient(90deg, 
                #ff6b9d ${loveLevel}%, 
                #c44569 ${loveLevel}%, 
                #ff6b9d 100%)`
            }}
          />
          <motion.div
            className="love-meter-heart"
            animate={isAnimating ? { scale: [1, 1.5, 1], rotate: [0, 360] } : {}}
            transition={{ duration: 0.6 }}
          >
            💖
          </motion.div>
        </div>
        <motion.div
          className="love-percentage"
          key={loveLevel}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {loveLevel}%
        </motion.div>
      </div>
      <p className="love-message">
        {loveLevel >= 100 ? 'Infinite Love! 💕' : 
         loveLevel >= 95 ? 'Beyond Measure! 💖' : 
         loveLevel >= 90 ? 'Overflowing! 💗' : 
         'Growing Stronger! 💝'}
      </p>
    </motion.div>
  )
}

export default LoveMeter

