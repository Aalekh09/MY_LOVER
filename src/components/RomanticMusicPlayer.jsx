import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaMusic, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import './RomanticMusicPlayer.css'

const RomanticMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  // You can add your own music files here
  const playlist = [
    { name: 'Our Song', url: '/music/our-song.mp3' },
    { name: 'Love Theme', url: '/music/love-theme.mp3' }
  ]

  const [currentTrack, setCurrentTrack] = useState(0)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err)
          // If audio file doesn't exist, just toggle the state
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <motion.div
      className="music-player-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="music-player-header">
        <FaMusic className="music-icon" />
        <h3>Our Love Playlist</h3>
      </div>

      <div className="music-player-content">
        <motion.button
          className="play-pause-btn"
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </motion.button>

        <div className="music-info">
          <p className="track-name">
            {playlist[currentTrack]?.name || 'Add your music files'}
          </p>
          <p className="music-message">
            {isPlaying ? '🎵 Playing our favorite song...' : '💕 Click to play our song'}
          </p>
        </div>

        <div className="volume-controls">
          <button
            className="mute-btn"
            onClick={toggleMute}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>

      {/* Hidden audio element - add your music file path here */}
      <audio
        ref={audioRef}
        src={playlist[currentTrack]?.url}
        onEnded={() => {
          setIsPlaying(false)
          // Auto-play next track if available
          if (currentTrack < playlist.length - 1) {
            setCurrentTrack(currentTrack + 1)
          }
        }}
      />

      <p className="music-instruction">
        💡 Add your music files to <code>public/music/</code> folder
      </p>
    </motion.div>
  )
}

export default RomanticMusicPlayer

