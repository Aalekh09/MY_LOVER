import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Confetti.css'

const Confetti = ({ trigger, colors = ['#ff6b9d', '#c44569', '#667eea', '#764ba2', '#4ecdc4'] }) => {
  useEffect(() => {
    if (trigger) {
      // Confetti effect will be handled by CSS animations
    }
  }, [trigger])

  if (!trigger) return null

  return (
    <div className="confetti-container">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="confetti-piece"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [1, 1, 0],
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 0.5,
            ease: 'easeOut'
          }}
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`
          }}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="confetti-heart"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 1,
            scale: 0
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            opacity: [1, 1, 0],
            scale: [0, 1, 0.5],
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 0.5,
            ease: 'easeOut'
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`
          }}
        >
          {['💖', '💕', '💗', '💝', '💘'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  )
}

export default Confetti

