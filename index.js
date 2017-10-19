const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.text({
    type: '*/*'
}))
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

app.post('/post_back_url', (req, res, next) => {    
    console.log(req.originalUrl)
    console.log(req.body)
    console.log(req.headers)
    res.json(req.body)
})

app.post('/result_url', (req, res, next) => {
    console.log(req.originalUrl)    
    console.log(req.body)
    console.log(req.headers)
    res.sendStatus(200)
})

// heroku will set port via env PORT
const port = process.env.PORT || 8080

app.listen(port)