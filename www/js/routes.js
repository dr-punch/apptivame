angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('apptíVame', {
      url: '/page1',
      templateUrl: 'templates/apptíVame.html',
      controller: 'apptíVameCtrl'
    })
        
      
    
      
        
    .state('home', {
      url: '/page2',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    
      
        
    .state('listado', {
      url: '/page3',
      templateUrl: 'templates/listado.html',
      controller: 'listadoCtrl'
    })
  
    .state('listadoArte', {
      url: '/listadoArte',
      templateUrl: 'templates/listadoArte.html',
      controller: 'listadoArteCtrl'
    })
        
    .state('listadoCine', {
      url: '/listadoCine',
      templateUrl: 'templates/listadoCine.html',
      controller: 'listadoCineCtrl'
    })
    
  .state('listadoDanza', {
      url: '/listadoDanza',
      templateUrl: 'templates/listadoDanza.html',
      controller: 'listadoDanzaCtrl'
    })
  
  .state('listadoVet', {
      url: '/listadoVet',
      templateUrl: 'templates/listadoVet.html',
      controller: 'listadoVetCtrl'
    })

  .state('listadoComidaSana', {
      url: '/listadoComidaSana',
      templateUrl: 'templates/listadoComidaSana.html',
      controller: 'listadoComidaSanaCtrl'
    })
        
    .state('detalle', {
      url: '/page4',
      templateUrl: 'templates/detalle.html',
      controller: 'detalleCtrl'
    })
        
    .state('detalleArte', {
      url: '/detalleArte/:id/:fecha/:evento/:tipo/:lugar/:hora',
      templateUrl: 'templates/detalleArte.html',
      controller: 'detalleArteCtrl'
    })  
    
      
        
    .state('mensaje', {
      url: '/page5',
      templateUrl: 'templates/mensaje.html',
      controller: 'mensajeCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});