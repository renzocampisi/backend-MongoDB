const express = require('express')
const products = require('./data/products.json')
const fs = require("fs");
const app = express()
const morgan = require('morgan')

//Settings
app.set('port', 3000)

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//Primer consigna
app.get('/login', (req, res) => {
  res.send('Login')
})


app.post("/products/add",(req, res) => {
    console.log(req.body);
    const newProd = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    }
    if (!newProd.id) {
      res.sendStatus(400)
    }
    products.push(newProd)
    fs.writeFile("./data/products.json", JSON.stringify(products),(err) => {

    })
    res.json(newProd)
} )

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})

app.delete("/products/delete", (req, res) => {
  fs.readFile("")
})