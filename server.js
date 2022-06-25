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
app.get('/manga', (req, res) => {
    res.render('manga')
})
app.get('/light', (req, res) => {
    res.render('light')
})
app.get('/accessory', (req, res) => {
    res.render('accessory')
})

app.listen(process.env.PORT || 3000)
