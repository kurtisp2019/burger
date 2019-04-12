/**
 * 
 *      burger.js 
 *      purpose: call the orm functions with the user input
 * 
 */

var orm = require("../config/orm");

function selectAll(_callBack) {
   
    orm.selectAll("burgers", function (_data) { 
        //
        _callBack(_data);
    });
}

function insertOne(_obj) {
   orm.insertOne("burgers", _obj);
}

function updateOne(_attributes, _condition) {
    orm.updateOne("burgers", _attributes, _condition);
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};