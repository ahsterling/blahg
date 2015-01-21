var postsControllerModule = angular.module('postsControllerModule', []);


postsControllerModule.controller("newPostController", ['$scope', '$http', function($scope, $http) {

  $scope.newPost = {title: '', content: '', tag_ids: [], date: Date()};

  $http.get('http://localhost:3000/tags')
    .success(function(data) {
      $scope.tags = data;
    });


  $scope.submitNewPost = function() {

    // $scope.posts.push($scope.newPost);
    $http.post('http://localhost:3000/posts',
      {
        post: {
          title: $scope.newPost.title,
          content: $scope.newPost.content,
          tag_ids: $scope.newPost.tag_ids,
          date: $scope.newPost.date
        }
      }
    )
  };

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

  $scope.newTag = {};

  $scope.createTag = function() {
    $http.post('http://localhost:3000/tags', {
      tag: {
        name: $scope.newTag.name
      }
    }).success(function(data) {
      $scope.tags.push({id: data.id, name: data.name});
    });

  };


}]);

postsControllerModule.controller('postController',['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $scope.id = $stateParams.id;
  $http.get('http://localhost:3000/posts/'+ $stateParams.id)
    .success(function(data) {
      $scope.post = data;
    })

  // $scope.createTag = function() {
  //   $http.post('http://localhost:3000/tags', {
  //     tag: {
  //       name: $scope.newTag;
  //     }
  //   })
  // }
}])
