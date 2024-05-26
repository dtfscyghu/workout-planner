// note-service.js

const db = require('./database');

function getAllNotes(userId) {
  // Implement code to fetch all notes for a user from the database
}

function addNote(userId, note) {
  // Implement code to add a new note to the database
}

function deleteNote(userId, noteId) {
  // Implement code to delete a note from the database
}

module.exports = {
  getAllNotes,
  addNote,
  deleteNote
};
