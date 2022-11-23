const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('public/css'))
app.use(express.static('public/images'))
app.use(express.static('public/fonts'))
app.use(express.static('crypto'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html')
})

app.get('/calculadora', (req, res) => {
    res.sendFile(__dirname + '/public/calculadora.html')
})

app.get('/conta', (req, res) => {
    res.sendFile(__dirname + '/public/conta.html')
})

app.get('/contato', (req, res) => {
    res.sendFile(__dirname + '/public/contato.html')
})

app.get('/investidor', (req, res) => {
    res.sendFile(__dirname + '/public/investidor.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/motorista', (req, res) => {
    res.sendFile(__dirname + '/public/motorista.html')
})

app.get('/privacy-policy', (req, res) => {
    res.sendFile(__dirname + '/public/privacy-policy.html')
})

app.get('/crypto', (req, res) => {
    res.sendFile(__dirname + '/crypto/index.html')
})

app.listen(port, () => {
    console.log('App running on http://localhost:'+port+'/')
})