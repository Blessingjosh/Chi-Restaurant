const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')))




app.get('/', (req, res)=>{
    res.render('Home')
})



















app.listen(3000, ()=>{
    console.log(`Server is runing good on http://localhost:${3000}`)
})