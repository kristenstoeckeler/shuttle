const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('made it to server detail router GET for project #', req.user);
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

router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('made it to server detail router for PUT', req.body, req.body.projectId.id);
    const queryText = 
        `UPDATE "project" SET ("finished_length_in", "quantity", 
        "fringe_length_in", "sampling_length_in", "loom_waste_in", 
        "warp_takeup_percent", "length_shrinkage_percent", "finished_width_in", 
        "width_shrinkage_percent", "sett", "extra_ends", "warp_yards_per_lb", 
        "warp_length_in", "weaving_length_tension_in", "weaving_length_relaxed_in", 
        "width_in_reed_in", "warp_ends", "warp_total_yds", "warp_total_oz", 
        "ppi", "weft_takeup_percent", "weft_ypp", "weft_total_yds", 
        "weft_total_oz", "notes") 
        = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 
        $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) 
        WHERE "id" = $26;`

    if (req.isAuthenticated()) {
        pool.query(queryText, [req.body.projectDetails.finished_length_in, req.body.projectDetails.quantity, req.body.projectDetails.fringe_length_in, 
            req.body.projectDetails.sampling_length_in, req.body.projectDetails.loom_waste_in, req.body.projectDetails.warp_takeup_percent, 
            req.body.projectDetails.length_shrinkage_percent,
            req.body.projectDetails.finished_width_in, req.body.projectDetails.width_shrinkage_percent, 
            req.body.projectDetails.sett, req.body.projectDetails.extra_ends,
            req.body.projectDetails.warp_yards_per_lb, req.body.projectDetails.warp_length_in, 
            req.body.projectDetails.weaving_length_tension_in, 
            req.body.projectDetails.weaving_length_relaxed_in, req.body.projectDetails.width_in_reed_in, 
            req.body.projectDetails.warp_ends, req.body.projectDetails.warp_total_yds,
            req.body.projectDetails.warp_total_oz, req.body.projectDetails.ppi, 
            req.body.projectDetails.weft_takeup_percent, req.body.projectDetails.weft_ypp, 
            req.body.projectDetails.weft_total_yds,
            req.body.projectDetails.weft_total_oz, req.body.projectNotes, req.body.projectId.id])
            .then((result) => {
                res.sendStatus(200);
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