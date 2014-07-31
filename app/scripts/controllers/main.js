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

    $scope.addArticle = function () {
    	$scope.article.date = new Date;
    	$scope.article.id = $scope.articles[$scope.articles.length-1].id + 1;
    	$scope.article.image = "/images/2.jpg";
    	$scope.articles.push($scope.article);
    	$(".close").click();
    	$scope.article = [];
    }

  });
