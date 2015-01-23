var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller("postsController", ['$scope', '$http', '$location', '$log', 'apiService', function($scope, $http, $location, $log, apiService) {
  $scope.posts = [];
  $scope.tags = [];

  apiService.get('posts')
  .success(function(data) {
    $scope.posts = data;
  });

  apiService.get('tags')
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

    var i = $scope.tagFilter.indexOf(tag_id);

    if (i == -1) {
      $scope.tagFilter.push(tag_id);
    } else {
      $scope.tagFilter.splice(i, 1);
    };

    // for (var i = 0; i < $scope.tags.length; i++) {
    //   if (tag_id == $scope.tags[i].id) {
    //     var tag = $scope.tags[i];
    //   }
    // }
    //
    // console.log(tag.id);
    //
    // if ($scope.tagFilter.indexOf(tag.id) >= 0) {
    //   var index = $scope.tagFilter.indexOf(tag.id);
    //   $scope.tagFilter.splice(index, 1);
    // } else {
    //   $scope.tagFilter.push(tag.id);
    // }

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

  $scope.totalItems = $scope.posts.length;
  $scope.currentPage = 1;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;

}]);

postsControllerModule.controller("newPostController", ['$scope', '$http', '$location', 'apiService', function($scope, $http, $location, apiService) {

  $scope.newPost = {title: '', content: '', tag_ids: [], date: Date()};

  apiService.get('tags')
    .success(function(data) {
      $scope.tags = data;
    });

  $scope.submitNewPost = function() {

    apiService.postPost($scope.newPost);
    $location.path('/');
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

postsControllerModule.controller('postController',['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
  $scope.id = $stateParams.id;
  $http.get('http://localhost:3000/posts/'+ $stateParams.id)
    .success(function(data) {
      $scope.post = data;
    });

  $scope.isEditing = false;

  $scope.deletePost = function() {
    var confirm = window.confirm("Are you sure?");
    if (confirm == true) {
      $http.delete('http://localhost:3000/posts/'+ $stateParams.id)
      .success(function(data) {
        $location.path('/');
      });

    }
  }

  $scope.editPost = function() {
    $scope.isEditing = true;
    console.log($stateParams);
    console.log($scope.post);
    console.log($scope.post.title);
    console.log($scope.post.content);
  //   $http.patch('http://localhost:3000/posts' + $stateParams.id)
  // .success(function(data) {
  //
  // })
  }

  $scope.savePost = function() {
    $http.patch('http://localhost:3000/posts/' + $stateParams.id, {
      post: {
        title: $scope.post.title,
        content: $scope.post.content
      }
    })
    .success(function() {
      $scope.isEditing = false;
    });
  }

}]);
