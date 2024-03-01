const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
  });

  
app.post('/add', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const sum = num1 + num2;
  res.send(`The sum is ${sum}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});