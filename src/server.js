const express = require('express')
const path = require('path')


const app = express()

// set view engine
app.set("view engine", "ejs");

//link my folders
app.use(express.static("public"))

// link my web pages
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/login', (req, res) => {
  res.send('login')
})

app.get('/signup', (req, res) => {
  res.send('signup')
})


// connect to port
app.listen(3000, () => {
  console.log(`server is running`)
})
