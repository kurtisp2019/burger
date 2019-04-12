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
        console.log(_data);
        _res.render("index", { burgers: _data });
    });
    

});

router.post("/api/burgers", function (_req, _res) {

    sql.insertOne(_req.body);

    _res.status(200).end();
});

router.put("/api/burgers/:id", function (_req, _res) {

    sql.updateOne({burger_name: _req.body.burger_name, devoured: _req.body.devoured}, {id: _req.params.id});
});



module.exports = router;

// app.listen(PORT, function () {
//     console.log("Connected on port: " + PORT);
// });


