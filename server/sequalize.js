const Sequelize = require('sequelize');
const EmployeeModel = require('./Employee/employee.model');
const DepartmentModel = require('./Department/department.model');

const sequelize = new Sequelize('testDB', 'root', 'Chetu@123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  ///To create new table in database automatically after deleting existing tables 
  // sequelize.sync({ force: true })
  // .then(() => {
  //   console.log(`Database & tables created!`)
  // })

  const Employee = EmployeeModel(sequelize, Sequelize);
  const Department = DepartmentModel(sequelize,Sequelize);

  Employee.belongsTo(Department, { as:'depId', foreignKey: 'dID', allowNull:false});  
  Department.hasMany(Employee, {foreignKey: 'dID', allowNull:false});

  ///In case of more than one tables maping on the basis of fields
  // Customer.belongsToMany(db.Department, { 
  //   through: {
  //     model: Department,
  //     unique: false,
  //     scope: {
  //       notable: 'customer'
  //     }
  //   },
  //   foreignKey: 'id',
  //   constraints: false
  // });

  module.exports = { Employee ,Department};
  