// Include express
const express = require('express')
// create a new express application 
const app = express()// call to the express constructor
//var with the port that will be used
const port = 3000

// set the default route
var index = (req, res) => {
    res.send('Index Page - Diego Estrada')
}

var home = (req, res) => {
    res.send('Home Page - Diego Estrada')
}

var about = (req, res) => {
    res.send('About Page - Diego Estrada')
}

var projects = (req, res) => {
    res.send('Projects Page - Diego Estrada')
}

var services = (req, res) => {
    res.send('Services Page - Diego Estrada')
}

var contact = (req, res) => {
    res.send('Contact Page - Diego Estrada')
}

app.get('/', index)
app.get('/home', home)
app.get('/about', about)
app.get('/projects', projects)
app.get('/services', services)
app.get('/contact', contact)

app.listen(port, () => {
    console.log(`Express is running on port: ${port}`)
})