//url: https://api.edamam.com/search?q=rice&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760

var app = angular.module('recipeApp', []);
app.controller('recipeController', function($scope, $http){
	$scope.getRecipes = function(){
		var recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760';
		if( $("#veg:checked").val() == $("#veg").val() ){
			recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760&health=vegan';
		}if( $("#kos:checked").val() == $("#kos").val() ){
			recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760&health=kosher';
		}if( $("#pal:checked").val() == $("#pal").val() ){
			recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760&health=paleo';
		}if( $("#bal:checked").val() == $("#bal").val() ) {
			recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760&diet=balanced';
		}if( $("#lwc:checked").val() == $("#lwc").val() ) {
			recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760&diet=low-carb';
		}if( $("#hip:checked").val() == $("#hip").val() ) {
			recipeString = 'https:api.edamam.com/search?q=' + $('#search').val() + '&app_id=fa7e7d81&app_key=0d7ac86e3692af9c04f09344b52ec760&diet=high-protein';
		}
		

	$http.get(recipeString)
	.then(function(recipeJSON){
		// $("#listArea").append(recipeJSON.data.hits[0].recipe.label);
		$scope.recipes = recipeJSON.data.hits;
		console.log(recipeJSON.data.hits[0]);

		});
	}
});