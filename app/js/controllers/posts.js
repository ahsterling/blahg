var postsControllerModule = angular.module('postsControllerModule', []);


postsControllerModule.controller("newPostController", ['$scope', '$http', function($scope, $http) {
  $scope.newName = "new name blahhh";

  $scope.newPost = {"title": '', "content": '', "tag_ids": []};

  $scope.tags =
  [
    { "id": "1a", "name": "2cool4school" },
    { "id": "2b", "name": "kittycat" },
    { "id": "doop5", "name": "everything is awesome" }
    ];

  $scope.toggleId = function(id) {
    i = $scope.newPost.tag_ids.indexOf(id);
    if (i == -1) {
      $scope.newPost.tag_ids.push(id);
    } else {
      $scope.newPost.tag_ids.splice(i, 1);
    }
  };

  $scope.getTagName = function(id) {
    ret = "";
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.tags.length; i++){
      // checks to see if the param we passed is equal to the tag id
      if(id == $scope.tags[i].id) {
        ret = $scope.tags[i];
      }
    }
    return ret.name;
  };

}]);

postsControllerModule.controller('postController',['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $scope.id = $stateParams.id;
}])
