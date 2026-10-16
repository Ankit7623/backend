require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('Welcome to Instagram')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login in this web</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to YouTube</h2>')
})

app.get('/facebook', (req, res) => {
  res.send('<h1>Welcome to facebook</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})