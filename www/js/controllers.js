angular.module('app.controllers', [])
  
.controller('apptíVameCtrl', function($scope) {

})
   
.controller('homeCtrl', function($scope) {

})
   
.controller('listadoArteCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    $http.get('js/actividadesculturales.json')
    .success(function(data){
        console.log("ListadoARte:" + data);
        $scope.listadosvc = data.result;
    })
    .error(function(data){
        console.log("error:"+ data);
    });

}])


.controller('listadoCineCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    $http.get('js/cine.json')
    .success(function(data){
        console.log("ListadoCine:" + data);
        $scope.listadosvc = data.result;
    })
    .error(function(data){
        console.log("error:"+ data);
    });

}])
.controller('listadoDanzaCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    $http.get('js/danza.json')
    .success(function(data){
        console.log("ListadoDanza:" + data);
        $scope.listadosvc = data.result;
    })
    .error(function(data){
        console.log("error:"+ data);
    });

}])

.controller('listadoVetCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    $http.get('js/vet.json')
    .success(function(data){
        console.log("ListadoVet:" + data);
        $scope.listadosvc = data.result;
    })
    .error(function(data){
        console.log("error:"+ data);
    });

}])

.controller('listadoComidaSanaCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    $http.get('js/comidasana.json')
    .success(function(data){
        console.log("ListadoComidaSana:" + data);
        $scope.listadosvc = data.result;
    })
    .error(function(data){
        console.log("error:"+ data);
    });

}])

.controller('detalleArteCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    $http.get('js/actividadesculturales.json')
    .success(function(data){
        console.log("detallearte");
        $scope.data_id = $state.params.id;
        $scope.data_fecha = $state.params.fecha;
        $scope.data_evento = $state.params.evento;
        $scope.data_tipo = $state.params.tipo;
        $scope.data_lugar = $state.params.lugar;
        $scope.data_hora = $state.params.hora;
       
    })
    .error(function(data){
        console.log("error:"+ data);
    });

}])

.controller('eventosCtrl', ['$scope','$http','$state',function($scope,$http,$state) {
    
    $http.get('js/actividadesculturales.json')
    .success(function(data){
        console.log("actividadesculturales:" + data);
        $scope.listadosvc = data.result;
    })
    .error(function(data){
        console.log("error:"+ data);
    });
}])
   
.controller('detalleCtrl', function($scope) {

})
   
.controller('mensajeCtrl', function($scope) {

})
 