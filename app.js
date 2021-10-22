const express = require('express')
const path = require('path')
const app = express()
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({extended : true}))
app.use(express.json())

const appdata = [
    {
        "id": uuid(),
        "name" : "Safwan taliparamba",
        "followers":21903,
        "tweet":"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        "id": uuid(),
        "name" : "jubair",
        "followers":123378,
        "tweet":"Lorem ipsum dolor sit amet consectetur adipisicing elit"

    },
    {
        "id": uuid(),
        "name" : "hiyas siddique",
        "followers":643762,
        "tweet":"Lorem ipsum dolor sit amet consectetur adipisicing elit"

    },
    {
        "id": uuid(),
        "name" : "aswathi achu",
        "followers":63738,
        "tweet":"Lorem ipsum dolor sit amet consectetur adipisicing elit"

    },
    {
        "id": uuid(),
        "name" : "Jeff bezos",
        "followers":327989,
        "tweet":"Lorem ipsum dolor sit amet consectetur adipisicing elit"

    },
    {
        "id": uuid(),
        "name" : "Elon musk",
        "followers":457362,
        "tweet":"Lorem ipsum dolor sit amet consectetur adipisicing elit"

    }
]


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
    req.body.id = uuid()
    appdata.push(req.body)
    res.redirect('/comments')
})
app.get('/comments/:id' , (req, res) => {
    const id = req.params.id
    const cid = appdata.find(c => c.id == id)
    res.render('details' , {cid})
})


app.listen(3000 , ()=>{
    console.log('listening on port 3000')
})

