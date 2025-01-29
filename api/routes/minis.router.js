const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()


// Get minis based on section and display
router.get('/allMinis', (req, res) => {
    const { gallerySection, galleryDisplay } = req.query

    let queryText = `SELECT * FROM "minis" WHERE "ondisplay" = true`
    let queryParams = []

    if (gallerySection !== 'welcome') {
        queryText += ` AND "theme" = $1`
        queryParams.push(gallerySection)

        if (galleryDisplay !== 'mainDisplay') {
            queryText += ` AND "realm" = $2`
            queryParams.push(galleryDisplay)
        }
    }
    queryText += ` ORDER BY "rank" ASC, RANDOM()`

    pool.query(queryText, queryParams).then((result) => {
        console.log(`/api/allMinis success`)
        res.send(result.rows)
    }).catch((error) => {
        console.log('/api/allMinis error', error)
        res.sendStatus(500)
    })
})


module.exports = router 