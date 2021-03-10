const rp = require('request-promise');
const url = 'https://www.goindigo.in/information/state-regulations.html#collapse1462727222';
let x = "abc";
rp(url)
  .then(function(html){
    //success!
    x = html;
    console.log(x);

  })
  .catch(function(err){
    //handle error
  });

  
const express = require('express');
const app = express();
app.listen(3000);

app.get('/', (req, res) => {
  res.send(x);
});

console.log("Listening to port 3000");