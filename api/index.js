const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')


// Route includes
const myMinisRouter = require('./routes/minis.router')

// express middleware
app.use(express.json())

// express routes
app.use('/api/myMinis', myMinisRouter)


app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

// app set
const PORT = process.env.PORT || 5076

// listen
app.listen(PORT, () => {
    console.log('listening on port:', PORT)
})

// export the app for vercel
module.exports = app


