const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log( 'made it to server project router', req.user);
    const queryText = 'SELECT * FROM "project" WHERE "user_id" = $1 ORDER BY "project_name";'

    if(req.isAuthenticated()){
        pool.query(queryText, [req.user.id])
            .then((result) => {
                console.log('Users projects came through!');
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
    console.log( 'made it to server project router POST', req.user, req.body.name);
    const queryText = 'INSERT INTO "project" ("user_id", "project_name") VALUES ($1, $2) RETURNING id';
    pool.query(queryText, [req.user.id, req.body.name])
    .then((result) => {
        console.log('Added new project to database');
        res.send(result.rows[0])
        // res.sendStatus(201);
    }).catch((error) => {
        console.log('Error on project router PUT');
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('made it to server project router DELETE', req.params);
    const queryText = 'DELETE FROM "project" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('Deleted project from database');
            res.sendStatus(200)
        }).catch((error) => {
            console.log('Error on project router DELETE');
            res.sendStatus(500);
        })
});

module.exports = router;