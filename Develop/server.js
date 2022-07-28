const express = require('express');
const path = require('path');
// const router = require('../routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

// GET Route for homepage
app.get('/api', (req, res) =>
  res.sendFile(path.join(__dirname, '../index.html'))
);

// GET Route for notes page
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
