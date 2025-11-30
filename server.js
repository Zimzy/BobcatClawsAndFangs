const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/Client-Contacts-Manager-Angular')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/Client-Contacts-Manager-Angular/index.html'));
});

// Default port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

