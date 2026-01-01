import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaTimes } from 'react-icons/fa'
import './LetterPage.css'

const LetterPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="letter-page">
      <div className="letter-container">
        <motion.div
          className="letter-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>💌 My Letter to You 💌</h1>
          <p className="letter-subtitle">Words from the depths of my heart</p>
        </motion.div>

        <div className="folder-wrapper">
          <div className="folder-back"></div>
          <motion.div
            className={`folder-front ${isOpen ? 'opening' : ''}`}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="folder-tab"></div>
            <div className="folder-label">
              <span>💕 For My Love 💕</span>
            </div>
            <div className="folder-decoration">
              <motion.div
                className="heart-seal"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💖
              </motion.div>
            </div>
            <div className="open-instruction">
              <p>Click to open and read my letter</p>
              <motion.div
                className="click-indicator"
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
                className="letter-paper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="paper-holes">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="hole"></div>
                  ))}
                </div>

                <motion.div
                  className="letter-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="letter-header-text">
                    <div className="date">Today & Forever</div>
                    <div className="to-from">
                      <div className="to">To: Meri Jaan ❤️</div>
                      <div className="from">From: Tumhara Aalekh 💕</div>
                    </div>
                  </div>

                  <div className="letter-body">
                    <p className="greeting">Meri Jaan,</p>

                    <p>
                      Kabhi socha nahi tha ki zindagi mein koi aisa aayega jo mujhe itna complete feel karayega... 
                      Phir tum aayi — aur sab kuch badal gaya.
                    </p>

                    <p>
                      Main sach bolun toh main perfect nahi hoon, kabhi kabhi gusse mein bol deta hoon, 
                      kabhi samajh nahi paata tumhari baatein… lekin dil se hamesha tumhari care karta hoon. 
                      Tumhari khushi, tumhari muskaan, sab kuch mere liye important hai. Tumhara rona bhi mujhse bardasht nahi hota.
                    </p>

                    <p>
                      Tum meri life ka wo hissa ban chuki ho jiske bina main soch bhi nahi sakta zindagi ko. 
                      Tum ho toh sab kuch hai. Tumhara saath hai toh har mushkil easy lagti hai. 
                      Tumhari awaz sunte hi din ka thakaan chala jaata hai.
                    </p>

                    <p>
                      Mujhe tumse sirf pyaar nahi hai… Mujhe tumse har roop mein lagav hai — tumhari har baat, 
                      har aadat, har nautanki mujhe pyaari lagti hai. Main chahta hoon ki tum hamesha khush raho, 
                      aur main wo reason banu jiski wajah se tum smile karti ho.
                    </p>

                    <p>
                      Main chahta hoon ki tum mujhe sirf aaj nahi, kal bhi chuno. Har din, har waqt main tumhara saath nibhaana chahta hoon. 
                      Zindagi ki har subah tumhare saath uthna chahta hoon, aur har raat tumhe thank you bolke sona chahta hoon ki tum meri life mein ho.
                    </p>

                    <p>
                      Tum meri dua bhi ho, aur meri takdeer bhi.<br />
                      Tum meri har khushi ki wajah ho, aur har dua ka asar.
                    </p>

                    <p>
                      Main hamesha tumhara rahunga. Tumse waada hai.<br />
                      Tumhari zindagi mein chahein kitni bhi problems aayein, main hamesha tumhare saath khada rahunga — 
                      haath pakad ke, bina chhode.
                    </p>

                    <p>Tumse bas ek hi guzarish hai — kabhi jaana mat. Tumhare bina main kuch bhi nahi.</p>

                    <p className="closing">
                      Tumse bepanah mohabbat karta hoon,<br />
                      – Tumhara pagal, tera apna naam
                    </p>

                    <div className="signature-section">
                      <p className="signature-line"><strong>Tumhara hamesha ke liye,</strong></p>
                      <motion.div
                        className="signature"
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        AALEKH ( JAANI )
                      </motion.div>
                      <div className="signature-hearts">💕 💖 💕</div>
                    </div>
                  </div>
                </motion.div>

                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="letter-navigation">
          <Link to="/home" className="nav-btn">
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LetterPage

