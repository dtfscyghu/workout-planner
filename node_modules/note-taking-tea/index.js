// index.js

const noteService = require('./note-service');
const userService = require('./user-service');
const authService = require('./auth-service');

// Example usage
const userId = 123;
const user = userService.getUser(userId);
console.log('User:', user);

authService.login('username', 'password');

const notes = noteService.getAllNotes(userId);
console.log('All notes:', notes);
