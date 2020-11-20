const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(columns, values, cb) {
        orm.create("burgers", columns, values, function(res) {
            cb(res);
        });
    },
    update: function(objColumnValues, condition, cb) {
        orm.update("burgers", objColumnValues, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res)
        });
    }
};

module.exports = burger;