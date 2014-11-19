/**
 * Created by bulusli on 2014/10/15.
 */
'use strict';
var app = angular.module('module', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: 'index.html'});

    $locationProvider.html5Mode(true);
}])
;