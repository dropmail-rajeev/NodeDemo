(function () {

  function EmployeeResource($resource) {
    return $resource('/api/employee/:id/:controller', {
        id: '@customerID'
      },
      {
        update: {
          method: 'GET',
        },       

      });
  }

  angular.module('nodeDemo')
    .factory('employeeResource', EmployeeResource);

})();
