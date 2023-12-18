const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'DB user',
  password: 'DB passwd',
  database: 'DB name'
});

app.get('/api/table', (req, res) => {
  db.query('SELECT * FROM Product', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
