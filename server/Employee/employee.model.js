//https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        salary:type.INTEGER,         
    })
}