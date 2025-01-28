const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()



// Get ALL minis on display
router.get('/allMinis', (req, res) => {
    const queryText = `
    SELECT * FROM "minis" WHERE "ondisplay" = true
	ORDER BY "rank" ASC, RANDOM();`

    pool.query(queryText).then((result) => {
        console.log(`/api/allMinis success`)
        res.send(result.rows)
    }).catch((error) => {
        console.log('/api/allMinis error', error)
        res.sendStatus(500)
    })
})