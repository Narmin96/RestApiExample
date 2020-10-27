const express=require('express');
const bodyParser=require('body-parser')

const feedRoutes=require('./routes/feed');

const app=express();
const fetch = require('node-fetch');
app.use(bodyParser.json());

app.use('/feed',feedRoutes);

//first way
/*app.get('/',async(request,response)=>{
    const api_url="https://cms.archis.company/teams";
    const fetch_response=await fetch(api_url);
    const json=await fetch_response.json();
    response.json(json);
    console.log(json);
})*/
var request = require("request")
var url = "https://cms.archis.company/teams" ;
request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) { 
        console.log(body[0].name) 
    }
})
app.listen(8000);