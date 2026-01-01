import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaTimes } from 'react-icons/fa'
import './StoryPage.css'

const StoryPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const storyEvents = [
    {
      date: '26 June 2024',
      icon: '💕',
      title: 'The Proposal',
      description: 'On the riverside, with the mountains watching over us, I asked you to be mine—and you kissed me. That was the beginning of everything beautiful in our lives.',
      decoration: '🏔️ 💋 🌊'
    },
    {
      date: 'Our First Adventure',
      icon: '✈️',
      title: 'First Trip Together',
      description: 'Our first trip gave us memories we\'ll never forget. The laughter echoing through new places, sharing food and discovering each other\'s quirks, watching sunsets paint the sky while we painted our future.',
      decoration: '🌅 🍽️ 😂'
    },
    {
      date: 'Every Single Day',
      icon: '📱',
      title: 'Random Moments',
      description: 'Video calls that lasted hours, mid-day messages that made us smile, late-night talks about everything and nothing—these tiny things became the biggest joy of my days. Distance meant nothing when hearts were so close.',
      decoration: '💬 🌙 ❤️'
    },
    {
      date: 'Today & Forever',
      icon: '🎉',
      title: 'One Year & Counting',
      description: 'Now here we are, stronger than ever, deeper in love. Sitting together, smiling, reminiscing about how far we\'ve come, and looking forward to forever. This is just the beginning of our eternal story.',
      decoration: '🥂 💖 ♾️'
    },
    {
      date: 'Forever & Always',
      icon: '🌟',
      title: 'Our Future Chapters',
      description: 'Every day with you is a new page in our story. Every moment we share adds another beautiful chapter. Our love story is still being written, and I can\'t wait to see what adventures await us in the pages yet to come.',
      decoration: '📝 💫 🔮'
    }
  ]

  return (
    <div className="story-page">
      <div className="story-container">
        <motion.div
          className="story-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>📖 Our Beautiful Story 📖</h1>
          <p className="story-subtitle">The journey of our love, chapter by chapter</p>
        </motion.div>

        <div className="story-folder-wrapper">
          <div className="story-folder-back"></div>
          <motion.div
            className={`story-folder-front ${isOpen ? 'opening' : ''}`}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="story-folder-tab"></div>
            <div className="story-folder-label">
              <span>📚 Our Love Story 📚</span>
            </div>
            <div className="story-folder-decoration">
              <motion.div
                className="story-heart-seal"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💕
              </motion.div>
            </div>
            <div className="story-open-instruction">
              <p>Click to open our story book</p>
              <motion.div
                className="story-click-indicator"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                👆
              </motion.div>
            </div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="story-book"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="story-book-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="story-book-header">
                    <h2>Our Journey Together</h2>
                    <div className="story-book-subtitle">A Love Story Written in Time</div>
                  </div>

                  <div className="timeline">
                    <div className="timeline-line"></div>

                    {storyEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        className="story-event"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                      >
                        <div className="event-marker">
                          <div className="event-icon">{event.icon}</div>
                        </div>
                        <div className="event-content">
                          <div className="event-date">{event.date}</div>
                          <h3>{event.title}</h3>
                          <p>{event.description}</p>
                          <div className="event-decoration">{event.decoration}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="story-epilogue">
                    <h3>To Be Continued...</h3>
                    <p>
                      Our story doesn't end here. It grows more beautiful with each passing day, 
                      each shared smile, each whispered "I love you." Here's to writing many more chapters together, my love.
                    </p>
                    <div className="story-signature">
                      <motion.div
                        className="story-hearts"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💕 💖 💕
                      </motion.div>
                      <div className="story-author">Written with love by Aalekh</div>
                    </div>
                  </div>
                </motion.div>

                <button className="story-close-btn" onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="story-navigation">
          <Link to="/home" className="nav-btn">
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StoryPage

