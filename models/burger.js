const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        console.log(name)
        orm.create("burgers", ["burger_name", "devoured"], [name, false], function (res) {
            cb(res);
        });
    },
    update: function (objColumnValues, condition, cb) {
        orm.update("burgers", objColumnValues, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res)
        });
    }
};

module.exports = burger;