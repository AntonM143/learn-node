const express = require('express')
const server = express()
const port = 3000
server.use(express.static('public'))

server.get('/', function (req, res) {
    res.send('Hello World!')
   
  })


  server.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`)
  console.log(`Example server listening at port:${port}`)
 
})
