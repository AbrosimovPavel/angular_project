'use strict';


angular.module('angularProjectApp')
  .controller('ArticleCtrl', function ($scope, $routeParams, Articles) {
    $scope.article = Articles.get({id:$routeParams.id});
  });
