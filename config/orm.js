/**
 * 
 *      orm.js
 *      purpose: define calls to the sql database
 */

var connection = require("./connection.js");

var orm = {
    
    selectAll: function(_table, _callBack) {
    
        var qs = "SELECT * FROM burgers";
        connection.query(qs, _table, function (_err, _data) { 
            if (_err) {
                console.log("err" + _err);
                return;
            }
            //
            _callBack( _data);
        });
    },

    insertOne: function (_table, _obj) {
    
        var qs = "INSERT INTO ?? SET ?";
        connection.query(qs, [_table, _obj], function (_err, _data) { 
            if (_err) {
                console.log("err" + _err);
                return;
            }
            console.log("insert success");
        });

    },

    updateOne: function (_table, _attributes, _condition) {
    
        var qs = "UPDATE ?? SET ? WHERE ?";
        connection.query(qs, [_table, _attributes, _condition], function (_err, _data) {
            if (_err) {
                console.log("err" + _err);
                return;
            }

            console.log("update success");
        });
    }
};

module.exports = orm;
