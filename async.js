const cheerio = require('cheerio');
const fs = require('fs');
const axios = require("axios");
const express= require('express');
const siteUrl ='https://www.goindigo.in/information/state-regulations.html';


function SaveHtml(data){
    fs.writeFile("./scrap.html", data, function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log(data);
    }); 
};


const fetchData = async () => {
  const result = await axios.get(siteUrl);
  let x = result.data
  SaveHtml(x)
  //console.log(result.data)
  //return cheerio.load(result.data);
};


fetchData();


function serve(htmlFile){
    var app = express();
    app.get('/', function(req, res) {
        res.sendFile(htmlFile, {root: __dirname })
    });
    
    var port = process.env.PORT || 80;
    var server = app.listen(port);
    console.log('Express app started on port ' + port);
}

serve('scrap.html');

