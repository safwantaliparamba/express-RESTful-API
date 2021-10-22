const express = require('express')
const path = require('path')
const app = express()
const appdata = require('./user.json')

app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname, '/views'))

app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/comments', (req, res) => {
    res.render('home' , {appdata})
})
app.get('/comments/new' , (req, res) => {
    res.render('newform')
})
app.post('/comments/new', (req, res) => {
    appdata.push(req.body)
    res.redirect('/comments')
})

app.listen(3000 , ()=>{
    console.log('listening on port 3000')
})

