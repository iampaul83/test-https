const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/post_back_url', (req, res, next) => {    
    console.log('/post_back_url')
    console.log(JSON.stringify(res.body))
    return res.json(req.body)
})

app.post('/result_url', (req, res, next) => {
    console.log('/result_url')
    console.log(JSON.stringify(res.body))
    res.sendStatus(200)
})

// heroku will set port via env PORT
const port = process.env.PORT || 8080

app.listen(port)