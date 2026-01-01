import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaHeart, FaTrash, FaEdit } from 'react-icons/fa'
import './MemoryNotes.css'

const MemoryNotes = () => {
  const [notes, setNotes] = useState([])
  const [isAdding, setIsAdding] = useState(false)
  const [newNote, setNewNote] = useState({ title: '', content: '', date: new Date().toLocaleDateString() })

  useEffect(() => {
    const savedNotes = localStorage.getItem('loveMemoryNotes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  const saveNotes = (updatedNotes) => {
    localStorage.setItem('loveMemoryNotes', JSON.stringify(updatedNotes))
    setNotes(updatedNotes)
  }

  const addNote = () => {
    if (newNote.title && newNote.content) {
      const note = {
        id: Date.now(),
        ...newNote,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
      saveNotes([...notes, note])
      setNewNote({ title: '', content: '', date: new Date().toLocaleDateString() })
      setIsAdding(false)
    }
  }

  const deleteNote = (id) => {
    saveNotes(notes.filter(note => note.id !== id))
  }

  return (
    <motion.div
      className="memory-notes-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="memory-notes-header">
        <FaHeart className="notes-icon" />
        <h3>Our Memory Notes</h3>
        <motion.button
          className="add-note-btn"
          onClick={() => setIsAdding(!isAdding)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPlus /> Add Memory
        </motion.button>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            className="add-note-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <input
              type="text"
              placeholder="Memory Title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              className="note-input"
            />
            <textarea
              placeholder="Write your beautiful memory here..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              className="note-textarea"
              rows="4"
            />
            <div className="note-form-actions">
              <button onClick={addNote} className="save-note-btn">
                Save Memory 💕
              </button>
              <button onClick={() => setIsAdding(false)} className="cancel-note-btn">
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="memory-notes-grid">
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              className="memory-note-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="note-header">
                <h4>{note.title}</h4>
                <button
                  className="delete-note-btn"
                  onClick={() => deleteNote(note.id)}
                >
                  <FaTrash />
                </button>
              </div>
              <p className="note-date">{note.date}</p>
              <p className="note-content">{note.content}</p>
              <div className="note-footer">
                <FaHeart className="note-heart" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {notes.length === 0 && !isAdding && (
        <div className="empty-notes">
          <FaHeart className="empty-icon" />
          <p>No memories yet. Add your first beautiful memory! 💕</p>
        </div>
      )}
    </motion.div>
  )
}

export default MemoryNotes

