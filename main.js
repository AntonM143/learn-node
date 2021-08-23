const express = require('express')
const fs = require('fs');
const server = express()
const port = 3000


server.use(express.json())

server.get('/api', function (req, res) {
    let raw = fs.readFileSync("cars.json")
    let cars = JSON.parse(raw)
    res.json(JSON.stringify(cars))
    
})
server.post('/api', (req, res) => {
    let raw = fs.readFileSync("cars.json")
    let cars = JSON.parse(raw)
    cars.push(req.body)
    fs.writeFileSync("cars.json", JSON.stringify(cars))
    res.json("sparat")
})

/* typ av import läser in allt i public mappen */
server.use(express.static('public'))

  server.listen(port, () => {
  
  console.log(`Example server listening at port:${port}`)
 
})
