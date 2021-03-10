const express = require('express');
const app = express();
app.listen(3000);

app.get('/', (req, res) => {
  res.send('hello world');
});

console.log("Listening to port 3000");