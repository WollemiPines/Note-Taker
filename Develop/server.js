const express = require('express');
const path = require('path');
const api = require('./routes/notes');
let db = require('./db/db.json');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', require('./routes/api/routefile'));
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, './public/notes.html'));
  // fs.readFile('./db/db.json', ()=> {});
});



// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/404.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
