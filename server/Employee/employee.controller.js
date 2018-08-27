const Employee = require('../sequalize').Employee;
const Department = require('../sequalize').Department;

let customers;
function getEmployees(req, res) {  
    console.log('=== called from client');   
    Employee.findAll()
        .then(employee =>         
        res.json({employees: employee})
    )
}

function getEmployeeswithDepartment(req, res) {  
    console.log('=== called from client');  
    Employee.findAll({
     include: [{
        model: Department,
        as: 'depId',
        attributes: ['id', 'Name']       
      }]
    })
    .then(employee =>          
   // res.json({employees: employee}))
   res.json(employee))
}

function postEmployee(req,res){
    Employee.create({
                name:'Don',
                salary:5000,
                dID:1
            }).then(employee =>
                    res.json(employee))
    }


function getSingleEmployees(req, res) {  
        console.log('===== req.body.id : ', req.params.id)  
        Employee.find({
            where:{
                id: req.params.id
            }
        })
        .then(employee => 
             
            res.json({employees: employee})
        )
    }  

module.exports = { 
    getEmployees,
    postEmployee,
    getSingleEmployees,
    getEmployeeswithDepartment
};