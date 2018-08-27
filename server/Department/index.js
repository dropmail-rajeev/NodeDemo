var express = require('express');
var controller = require('./department.controller');

    var router = express.Router();

    router.get('/', controller.getDepartment);  
    router.post('/', controller.postDepartment);  

    module.exports = router;