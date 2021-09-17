const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
  res.send('ОПА ЗДАРОВА!')
})

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
})