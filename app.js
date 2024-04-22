const express = require('express');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const app = express();

app.use(express.static('public'))
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs'); 

app.get('/',(req,res)=>{
    res.render('home')
})

const port = 3000;
app.listen(port,()=>{
    console.log(`futta is live on ${port}`)
})