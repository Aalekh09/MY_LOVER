import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './GamePage.css'

const GamePage = () => {
  const navigate = useNavigate()
  const [correctPlacements, setCorrectPlacements] = useState(0)
  const [pieces, setPieces] = useState({
    love: ['L', 'O', 'V', 'E'],
    you: ['Y', 'O', 'U'],
    aalekh: ['A', 'A', 'L', 'E', 'K', 'H']
  })
  const [placedPieces, setPlacedPieces] = useState({
    love: {},
    you: {},
    aalekh: {}
  })
  const [draggedPiece, setDraggedPiece] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const totalPieces = 13

  useEffect(() => {
    shufflePieces()
  }, [])

  const shufflePieces = () => {
    const shuffled = {
      love: [...pieces.love].sort(() => Math.random() - 0.5),
      you: [...pieces.you].sort(() => Math.random() - 0.5),
      aalekh: [...pieces.aalekh].sort(() => Math.random() - 0.5)
    }
    setPieces(shuffled)
  }

  const handleDragStart = (e, word, index, letter) => {
    setDraggedPiece({ word, index, letter })
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, word, targetIndex) => {
    e.preventDefault()
    if (!draggedPiece || draggedPiece.word !== word) {
      setDraggedPiece(null)
      return
    }

    const correctOrder = {
      love: ['L', 'O', 'V', 'E'],
      you: ['Y', 'O', 'U'],
      aalekh: ['A', 'A', 'L', 'E', 'K', 'H']
    }

    const isCorrect = 
      draggedPiece.letter === correctOrder[word][targetIndex]

    if (isCorrect) {
      setPlacedPieces(prev => ({
        ...prev,
        [word]: { ...prev[word], [targetIndex]: draggedPiece.letter }
      }))
      setCorrectPlacements(prev => prev + 1)
      createSparkle(e.target)
    } else {
      e.target.classList.add('shake')
      setTimeout(() => e.target.classList.remove('shake'), 500)
    }
    setDraggedPiece(null)
  }

  const createSparkle = (element) => {
    const sparkle = document.createElement('div')
    sparkle.className = 'sparkle'
    sparkle.innerHTML = '✨'
    element.appendChild(sparkle)
    setTimeout(() => sparkle.remove(), 1000)
  }

  useEffect(() => {
    if (correctPlacements === totalPieces) {
      setTimeout(() => setShowSuccess(true), 500)
      setTimeout(() => navigate('/home'), 3000)
    }
  }, [correctPlacements, navigate])

  const progress = (correctPlacements / totalPieces) * 100

  const renderWordSection = (word, letters) => {
    const correctOrder = {
      love: ['L', 'O', 'V', 'E'],
      you: ['Y', 'O', 'U'],
      aalekh: ['A', 'A', 'L', 'E', 'K', 'H']
    }

    return (
      <motion.div 
        className="word-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>{word.toUpperCase()}</h3>
        <div className="heart-puzzle">
          {letters.map((letter, index) => {
            const isPlaced = placedPieces[word] && placedPieces[word][index] === letter
            const shouldShow = !isPlaced
            return (
              shouldShow && (
                <motion.div
                  key={`${word}-${index}`}
                  className="heart-piece"
                  draggable
                  onDragStart={(e) => handleDragStart(e, word, index, letter)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{letter}</span>
                </motion.div>
              )
            )
          })}
        </div>
        <div className="drop-zones">
          {correctOrder[word].map((_, index) => (
            <motion.div
              key={index}
              className={`drop-zone ${placedPieces[word] && placedPieces[word][index] ? 'filled' : ''}`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, word, index)}
              whileHover={{ scale: 1.05 }}
            >
              {placedPieces[word] && placedPieces[word][index] ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="correct-letter"
                >
                  {placedPieces[word][index]}
                </motion.span>
              ) : (
                index + 1
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="game-page">
      <div className="game-container">
        <motion.div
          className="game-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>💕 Love Connection 💕</h1>
          <p className="game-subtitle">Complete the heart puzzle to unlock our love story</p>
        </motion.div>

        <div className="game-content">
          <div className="puzzle-container">
            {renderWordSection('love', pieces.love)}
            {renderWordSection('you', pieces.you)}
            {renderWordSection('aalekh', pieces.aalekh)}
          </div>

          <div className="game-instructions">
            <p>🎯 Drag each letter to spell "LOVE YOU AALEKH" and unlock our journey!</p>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="progress-text">
              Progress: <span>{correctPlacements}/{totalPieces}</span>
            </p>
          </div>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="success-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="heart-explosion">
                {['💖', '💕', '💗', '💝', '💘'].map((heart, i) => (
                  <motion.div
                    key={i}
                    className="heart"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    {heart}
                  </motion.div>
                ))}
              </div>
              <h2>Perfect! Love Unlocked! 🎉</h2>
              <p>Taking you to our beautiful journey...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default GamePage

