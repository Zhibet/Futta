const express = require('express');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const app = express();
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home');
const pricing = require('./routes/pricing');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',homeRoute);
app.use('/price',pricing)

app.use(express.static('public'))
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs'); 



const port = 3000;
app.listen(port,()=>{
    console.log(`futta is live on ${port}`)
})