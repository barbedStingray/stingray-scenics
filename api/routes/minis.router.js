const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()


// Get minis based on section and display
router.get('/allMinis', (req, res) => {
    const { gallerySection, galleryDisplay } = req.query;

    // Define the basic queries
    const allMinisQuery = `SELECT * FROM "minis"
                           WHERE "ondisplay" = true 
                           ORDER BY "minis"."rank" DESC, RANDOM();`;

    const realmQuery = `SELECT * FROM "minis"
                        JOIN "mini_realm" ON "minis"."id" = "mini_realm"."mini_id"
                        JOIN "realm" ON "mini_realm"."realm_id" = "realm"."id"
                        WHERE "realm"."group" = $1 
                        AND "minis"."ondisplay" = true 
                        ORDER BY "minis"."rank" DESC, RANDOM();`;

    const themeQuery = `SELECT * FROM "minis"
                        WHERE "theme" = $1 
                        AND "minis"."ondisplay" = true 
                        ORDER BY "minis"."rank" DESC, RANDOM();`;

    let queryText = '';
    let queryParams = [];

    // Determine the correct query
    if (gallerySection === 'welcome') {
        queryText = allMinisQuery;
    } else if (galleryDisplay === 'mainDisplay') {
        queryText = themeQuery;
        queryParams.push(gallerySection); // Use gallerySection as theme
    } else {
        queryText = realmQuery;
        queryParams.push(galleryDisplay); // Use galleryDisplay for realm group
    }

    // Execute the query
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log(`/api/allMinis success`);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('/api/allMinis error', error);
            res.sendStatus(500);
        });
});

module.exports = router;


module.exports = router 