import express from 'express';
import fs from 'fs';
const server = express()
const port = process.env.PORT || 3000

import usersRoutes from "./routes/users.js";


server.use(express.json())

server.use('/users', usersRoutes)
server.get('/api', function (req, res) {
  let raw = fs.readFileSync("users.json")
  let users = JSON.parse(raw)
  res.json(users)
    
})



/* typ av import läser in allt i public mappen */
server.use(express.static('public'))

  server.listen(port, () => {
  
  console.log(`Example server listening at port:${port}`)
 
})
