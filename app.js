const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let todos = []; // Array to store tasks

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (CSS)
app.set('view engine', 'ejs'); // Set EJS as the template engine

// Routes
app.get('/', (req, res) => {
  res.render('index', { todos }); // Render the to-do list
});

app.post('/add', (req, res) => {
  const newTodo = req.body.todo;
  if (newTodo) todos.push(newTodo); // Add new task to the list
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const index = req.body.index;
  todos.splice(index, 1); // Remove task by index
  res.redirect('/');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
