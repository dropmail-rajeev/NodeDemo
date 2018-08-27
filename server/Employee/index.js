var express = require('express');
var controller = require('./employee.controller');

    var router = express.Router();

    router.get('/', controller.getEmployees);  
    router.post('/', controller.postEmployee);
    router.get('/:id', controller.getSingleEmployees);   
    router.get('/employee/all', controller.getEmployeeswithDepartment);

    module.exports = router;
