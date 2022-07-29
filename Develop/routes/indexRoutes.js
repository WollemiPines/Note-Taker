const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;



// const express = require('express');
// const router = express.Router();
// const path = require('path');

// // GET Route for homepage
// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../../public/index.html'))
// );

// // GET Route for notes page
// router.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '../../public/notes.html'))
// );

// // Wildcard route to direct users to a 404 page
// router.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '../../public/404.html'))
// );

// module.exports = router;