const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('made it to server detail router', req.params.id);
    const queryText = 'SELECT * FROM "project" WHERE "id" = $1;'

    if (req.isAuthenticated()) {
        pool.query(queryText, [req.params.id])
            .then((result) => {
                console.log('these are the details for working projec', result.rows[0]);
                res.send(result.rows[0]);
            }).catch((error) => {
                console.log(`Error on query for user projects ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
// router.post('/', rejectUnauthenticated, (req, res) => {
//     console.log('made it to server project router POST', req.user, req.body);
//     const queryText = 'INSERT INTO "project" ("user_id", "project_name") VALUES ($1, $2);';
//     pool.query(queryText, [req.user.id, req.body.project_name])
//         .then((result) => {
//             console.log('Added new project to database');
//             res.sendStatus(201);
//         }).catch((error) => {
//             console.log('Error on project router PUT');
//             res.sendStatus(500);
//         })
// });

module.exports = router;