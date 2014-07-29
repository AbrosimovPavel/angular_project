'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('MainCtrl', function ($scope, articlesService) {
    $scope.articles = articlesService.articles;
    articlesService.getArticles();
  });
