const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log( 'made it to server project router', req.user);
    const queryText = 'SELECT "project_name", "date" FROM "project" WHERE "user_id" = $1;'

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
router.post('/', (req, res) => {

});

module.exports = router;