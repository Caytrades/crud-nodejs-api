const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Added Hello World')
})
  

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000")
})