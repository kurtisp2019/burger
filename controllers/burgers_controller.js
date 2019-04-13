/**
 * 
 *      burger.js 
 *      purpose: 
 */

var express = require("express");
var router = express.Router();

var sql = require("../model/burger");

router.get("/", function (_req, _res) {
    
    sql.selectAll(function (_data) {
        
        _res.render("index", { burgers: _data });
    });
    

});

router.get("/api/burgers", function (_req, _res) { 

    sql.selectAll(function (_data) {


        _res.json(_data);
     });
});

router.post("/api/burgers", function (_req, _res) {

    sql.insertOne(_req.body);

    _res.status(200).end();
});

router.put("/api/burgers/:id", function (_req, _res) {

    sql.updateOne({devoured: _req.body.devoured}, {id: _req.params.id});
    _res.status(200).end();
});



module.exports = router;

// app.listen(PORT, function () {
//     console.log("Connected on port: " + PORT);
// });


