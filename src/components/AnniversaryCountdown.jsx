import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaHeart } from 'react-icons/fa'
import './AnniversaryCountdown.css'

const AnniversaryCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const nextAnniversary = new Date(currentYear, 5, 26) // June 26 (month is 0-indexed)
      
      // If anniversary has passed this year, set for next year
      if (now > nextAnniversary) {
        nextAnniversary.setFullYear(currentYear + 1)
      }

      const difference = nextAnniversary - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  const countdownItems = [
    { label: 'Days', value: timeLeft.days, icon: '📅' },
    { label: 'Hours', value: timeLeft.hours, icon: '⏰' },
    { label: 'Minutes', value: timeLeft.minutes, icon: '⏱️' },
    { label: 'Seconds', value: timeLeft.seconds, icon: '⏲️' }
  ]

  return (
    <motion.div
      className="countdown-anniversary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="countdown-header">
        <FaCalendar className="countdown-icon" />
        <FaHeart className="countdown-heart-icon" />
        <h3>Next Anniversary Countdown</h3>
      </div>
      <div className="countdown-grid">
        {countdownItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="countdown-item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <div className="countdown-icon-emoji">{item.icon}</div>
            <motion.div
              className="countdown-value"
              key={item.value}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {String(item.value).padStart(2, '0')}
            </motion.div>
            <div className="countdown-label">{item.label}</div>
          </motion.div>
        ))}
      </div>
      <p className="countdown-message">
        Until we celebrate another beautiful year together! 💕
      </p>
    </motion.div>
  )
}

export default AnniversaryCountdown

