const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.post('/post_back_url', (req, res, next) => {    
    console.log(req.originalUrl)
    console.log(JSON.stringify(req.body))
    res.json(req.body)
})

app.post('/result_url', (req, res, next) => {
    console.log(req.originalUrl)    
    console.log(JSON.stringify(req.body))
    res.sendStatus(200)
})

// heroku will set port via env PORT
const port = process.env.PORT || 8080

app.listen(port)