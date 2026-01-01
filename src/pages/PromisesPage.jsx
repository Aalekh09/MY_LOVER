import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import './PromisesPage.css'

const PromisesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const dreams = [
    {
      icon: '🏔️',
      title: 'Mountain Adventures',
      description: 'Travel to the mountains again, but this time with more hugs and endless memories to create.',
      category: 'adventure'
    },
    {
      icon: '👨‍🍳',
      title: 'Cooking Together',
      description: 'Cook our favorite food together, sharing laughter, flour fights, and the sweetest moments in our kitchen.',
      category: 'home'
    },
    {
      icon: '🌅',
      title: 'Sunset Moments',
      description: 'Watch sunsets holding your hand, feeling grateful for every day we get to love each other.',
      category: 'romance'
    },
    {
      icon: '🎉',
      title: 'Celebrate Everything',
      description: 'Celebrate every little milestone, every small victory, and every reason to smile together.',
      category: 'celebration'
    },
    {
      icon: '😂',
      title: 'Laughter & Tears',
      description: 'Laugh till we cry, and cry only in each other\'s arms - sharing every emotion life brings us.',
      category: 'emotion'
    },
    {
      icon: '👴👵',
      title: 'Growing Old Together',
      description: 'Grow old, but never grow apart - staying young at heart while our love grows deeper each day.',
      category: 'future'
    },
    {
      icon: '🌙',
      title: 'Midnight Conversations',
      description: 'Share our deepest thoughts under starlit skies, whispering dreams and secrets only we know.',
      category: 'romance'
    },
    {
      icon: '✈️',
      title: 'World Adventures',
      description: 'Explore new places hand in hand, collecting memories from every corner of the world we visit.',
      category: 'adventure'
    },
    {
      icon: '🏡',
      title: 'Our Dream Home',
      description: 'Build a cozy home filled with love, laughter, and all the little things that make us happy.',
      category: 'home'
    },
    {
      icon: '♾️',
      title: 'To Infinity & Beyond',
      description: 'Love you beyond time, beyond space, beyond everything - our love story has no ending.',
      category: 'future'
    }
  ]

  return (
    <div className="dreams-page">
      <div className="dreams-container">
        <motion.div
          className="dreams-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="floating-stars">
            {['✨', '🌟', '💫', '⭐', '🌠'].map((star, i) => (
              <motion.div
                key={i}
                className="star"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  repeatType: 'reverse'
                }}
                style={{
                  position: 'absolute',
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                  fontSize: '2em'
                }}
              >
                {star}
              </motion.div>
            ))}
          </div>
          <h1>Our Dreams & Promises 💫</h1>
          <p className="dreams-subtitle">The beautiful future we're building together</p>
        </motion.div>

        <div className="dreams-content">
          <motion.div
            className="dreams-grid"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {dreams.map((dream, index) => (
              <motion.div
                key={index}
                className="dream-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="dream-icon"
                  animate={hoveredCard === index ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {dream.icon}
                </motion.div>
                <h3>{dream.title}</h3>
                <p>{dream.description}</p>
                <div className="dream-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="dreams-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="promise-section">
            <h2>My Promise to You</h2>
            <div className="promise-text">
              <p>
                "I promise to love you in every season of life, to be your safe haven in storms, 
                your celebration partner in joy, and your constant companion through every adventure. 
                Together, we'll turn every dream into reality."
              </p>
              <motion.div
                className="signature"
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                - Forever Yours, Aalekh 💕
              </motion.div>
            </div>
          </div>

          <div className="navigation">
            <Link to="/home" className="nav-btn">
              <FaHome /> Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PromisesPage

