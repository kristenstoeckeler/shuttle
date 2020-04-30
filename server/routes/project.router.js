const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log( 'made it to server project router', req.user);
    const queryText = 'INSERT INTO "project" ("user_id)" FROM "project" WHERE "user_id" = $1;'

    if(req.isAuthenticated()){
        pool.query(queryText, [req.user.id])
            .then((result) => {
                console.log('these are the users projects', result.rows);
                res.send(result.rows);
            }).catch((error) => {
                console.log(`Error on query for user projects ${error}`);
                res.sendStatus(500);
            });
    }else{
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log( 'made it to server project router POST', req.user);
    const queryText = 'INSERT INTO "project" ("user_id") VALUES ($1);';
    pool.query(queryText, [req.user.id])
    .then((result) => {
        console.log('Added new project to database');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error on project router PUT');
        res.sendStatus(500);
    })
    pool.query(queryText, [req.user.id])
        .then((result) => {
            console.log('Added new project to database');
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error on project router PUT');
            res.sendStatus(500);
        })
});

module.exports = router;