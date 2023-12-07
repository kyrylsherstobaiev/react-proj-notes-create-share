const Sequelize = require("sequelize");

const sequelize =  new Sequelize("react_db_js", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}