angular.module('angularProjectApp')
    .factory("articlesService", function($http){
        var _articles = [];
     
        var _getArticles = function(){
     
            $http.get("/scripts/data/articles.json")
                .then(function(results){
                    //Success
                    console.log("success");
                    angular.copy(results.data, _articles); //this is the preferred; instead of $scope.movies = result.data
                }, function(results){
                    //Error
                    console.log("Error");
                })
        }

        // var _addArticles = function(){
        //     $http.post("/scripts/data/articles.json", 'data').success(
                
        //         )
        // }

        return{
            articles: _articles,
            getArticles: _getArticles
        };
    }); 