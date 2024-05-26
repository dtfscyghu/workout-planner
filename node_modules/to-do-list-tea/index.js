// index.js

const taskService = require('./task-service');
const userService = require('./user-service');
const authService = require('./auth-service');

// Example usage
const tasks = taskService.getAllTasks();
console.log('All tasks:', tasks);

const user = userService.getUser(123);
console.log('User:', user);

authService.login('username', 'password');
