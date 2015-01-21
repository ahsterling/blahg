var homeControllerModule = angular.module('homeControllerModule', []);
homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {

  $scope.posts = [];
  $scope.tags = [];

  $http.get('http://localhost:3000/posts')
    .success(function(data) {
      $scope.posts = data;
    });

  $http.get('http://localhost:3000/tags')
    .success(function(data) {
      $scope.tags = data;
    })


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

  $scope.tagFilter = [];

  $scope.setTagFilter = function(tag_id) {

    for (var i = 0; i < $scope.tags.length; i++) {
      if (tag_id == $scope.tags[i].id) {
        var tag = $scope.tags[i];
      }
    }

    console.log(tag.id);

    if ($scope.tagFilter.indexOf(tag.id) >= 0) {
      var index = $scope.tagFilter.indexOf(tag.id);
      $scope.tagFilter.splice(index, 1);
    } else {
      $scope.tagFilter.push(tag.id);
    }

  }

  $scope.postHasTag = function(post) {
    var hasTags = false;
    if ($scope.tagFilter.length === 0) {
      hasTags = true;
    };
    // console.log(hasTags);

    for (var i = 0; i < $scope.tagFilter.length; i++) {
      if (post.tag_ids.indexOf($scope.tagFilter[i]) >=0) {
        hasTags = true;
      }
    }

    return hasTags
    // return post.tag_ids.indexOf($scope.tagFilter) >= 0

    // for (i = 0; i < $scope.posts.length; i++) {
    //   if ($scope.posts[i].id == post_id) {
    //     var post = $scope.posts[i];
    //     if (post.tag_ids.includes(tag_id)) {
    //       return true
    //     }
    //   }
    // }
  }


  $scope.orderProp = "-date";
  $scope.newPost = {"title": '', "content": '', "tag_ids": []};
  $scope.submitNewPost = function() {
    $scope.posts.push($scope.newPost);
  };

  $scope.toggleId = function(id) {
    i = $scope.newPost.tag_ids.indexOf(id);
    if (i == -1) {
      $scope.newPost.tag_ids.push(id);
    } else {
      $scope.newPost.tag_ids.splice(i, 1);
    }
  };



}]);

homeControllerModule.controller("aboutController", ["$scope", "$http", function($scope, $http) {

}]);
