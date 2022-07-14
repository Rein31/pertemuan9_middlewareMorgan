
const express = require("express");
const fs = require("fs")
var path = require('path')
var expressLayouts = require('express-ejs-layouts');
var morgan = require('morgan')

const app = express();

const port = 3000;


// information using ejs
app.set('view engine', 'ejs')

app.use(expressLayouts);
app.set('layout', 'layouts/main');

// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('dev'))

app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })

app.get("/", (req, res) => {
//   res.send("Hello World!");
cont = [
    {
        nama: 'rei',
        email: 'r@gmail.com',
    },
    {
        nama: 'reeee',
        email: 'ree@gmail.com',
    },
    {
        nama: 'ruu',
        email: 'ruu@gmail.com',
    }
]
    res.render('index', {
        nama: "Reinaldi",
        title : "WEB server EJS", 
        cont,
    });
});

app.get("/about", (req, res) => {
//   res.send("This is page about!");
    res.render('about', {
        title : "About Page"
    })
});

app.get("/contact", (req, res) => {
    // res.send("This is contact about!");
    res.render('contact', {
        title : "Contact Page"
    })
});

app.get('/product/:id', (req, res) => {
    // res.send('product id : ' + req.params.id + '<br><br>'
    // + 'category id : ' + req.params.idCat)
    res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`)
})

app.use('/', (req,res) => {
    res.status(404)
    res.send("404 Page Not Found!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});