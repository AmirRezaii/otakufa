require('dotenv').config()
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', './layouts/header.ejs')
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/products', (req, res) => {
    res.render('404')
})
app.get('/about', (req, res) => {
    res.render('404')
})
app.get('/qna', (req, res) => {
    res.render('404')
})
app.get('/auth', (req, res) => {
    res.render('404')
})

app.listen(process.env.PORT || 3000)
