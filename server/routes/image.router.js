const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('made it to server image router GET for project #', req.user);
    const queryText = 'SELECT * FROM "photos" WHERE "project_id" = $1;'

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



router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('made it to server image router POST', req.body.url, req.body.project_id.id);
    const queryText = 'INSERT INTO "photos" ("project_id", "location") VALUES ($1, $2);';
    pool.query(queryText, [req.body.project_id.id, req.body.url])
        .then((result) => {
            console.log('Added new project to database');
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error on project router POST');
            res.sendStatus(500);
        })
});

module.exports = router;