const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
let x = "abc";
const url = 'https://www.goindigo.in/information/state-regulations.html';
//sconst url = 'https://stackabuse.com/using-global-variables-in-node-js/';

axios.get(url).then(response =>{
    x = response.data;
   // console.log(x);
    // console.log(response.data);

    fs.writeFile("D:\\Workspace\\Software Development\\nuzha-anam\\LetSplit\\Dev\\CurrentCovidGuidelines\\scrap.html", x, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
})
.catch(err=> {
    console.log(error);
})

const express = require('express');
const app = express();
app.listen(5000);

app.get('/', (req, res) => {
  res.send(x);
});

console.log("Listening to port 3000");






//fs.writeFileSync("D:\\Workspace\\Software Development\\nuzha-anam\\LetSplit\\Dev\\CurrentCovidGuidelines\\scrap.html", x,);

