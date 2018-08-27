const Department = require('../sequalize').Department;

function getDepartment(req, res) {       
    
    Department.findAll().then(department => res.json(department))
}

function postDepartment(req,res){

    Department.create({
                name:'John'                
            }).then(department => res.json(department))
    }

module.exports = { getDepartment, postDepartment };