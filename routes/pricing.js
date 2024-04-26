const express = require('express');
const pricing = express.Router();

pricing.get('/',(req,res)=>{
    res.render('price')
})

pricing.post('/',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = pricing;