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

app.listen(process.env.PORT || 3000)
