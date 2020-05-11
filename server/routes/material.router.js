const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('made it to server material router GET for project #', req.params.id);
    const queryText = 'SELECT * FROM "materials" WHERE "project_id" = $1;'

    if (req.isAuthenticated()) {
        pool.query(queryText, [req.params.id])
            .then((result) => {
                console.log('these are the images for working project', result.rows);
                res.send(result.rows);
            }).catch((error) => {
                console.log(`Error on query for user projects ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;