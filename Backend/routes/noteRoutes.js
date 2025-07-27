const express = require('express');
const router = express.Router();
const note = require('../models/notes');

// Create a note
router.post('/create', async (req, res) => {
    const noteData = req.body;
    try {
        const { title, content, user } = noteData;
        const newNote = new note({ title, content, user });
        await newNote.save();
        res.status(201).json({ message: 'Note created successfully', note: newNote });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Fetch all notes for a user
router.get('/all/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const notes = await note.find({ user: userId });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a note
router.put('/update/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const { title, content } = req.body;
        const updatedNote = await note.findByIdAndUpdate(
            noteId,
            { title, content },
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ message: 'Note updated successfully', note: updatedNote });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a note
router.delete('/delete/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const deletedNote = await note.findByIdAndDelete(noteId);
        if (!deletedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;