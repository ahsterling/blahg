var homeControllerModule = angular.module('homeControllerModule', []);
homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $scope.posts = [
    {
      "content": "Run biting sagittis elit cras nec vestibulum, tempus lick sleep on your keyboard stuck in a tree suscipit. Vestibulum judging you sleep in the sink eat the grass non non, zzz amet pellentesque tincidunt a. Iaculis purr rutrum claw faucibus sniff, nibh quis nunc feed me suspendisse vehicula toss the mousie. Sleep in the sink justo vestibulum ac hairball, tail flick jump eat faucibus enim ut purr iaculis. Zzz give me fish stuck in a tree jump on the table, in viverra rhoncus scratched sleep in the sink hiss stuck in a tree pharetra. Rutrum bat nam orci turpis sniff suspendisse, nibh rutrum nunc sagittis run orci turpis. Bat purr fluffy fur libero, attack lick adipiscing catnip sleep in the sink nunc. \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "date": "2014-12-07T00:00:00.000Z",
      "id": "123abc",
      "tag_ids": ["1a", "2b"],
      "title": "My day"
    },
    {
      "content": "Kitty ipsum dolor sit amet, climb the curtains run hairball judging you leap, biting sniff jump on the table fluffy fur biting. Lay down in your way run bat chase the red dot biting climb the curtains, bat chuf sleep on your face meow. I don't like that food tail flick biting leap puking, meow scratched stuck in a tree lick sleep in the sink climb the curtains. Puking jump on the table feed me rip the couch judging you, meow tail flick purr I don't like that food jump leap. Sniff bat bat feed me I don't like that food meow, toss the mousie toss the mousie toss the mousie feed me. Sleep on your keyboard bat purr hairball, sniff claw run jump on the table chuf eat. Chuf stuck in a tree biting chuf, eat the grass claw stretching sleep in the sink hairball stuck in a tree.",
      "date": "2015-01-07T00:00:00.000Z",
      "id": "woEvm3",
      "tag_ids": [],
      "title": "Turtles are weird"
    },
    {
      "content": "In viverra faucibus justo bat, faucibus faucibus dolor sniff kittens non. Run judging you climb the curtains faucibus leap, vehicula sleep on your keyboard vehicula tortor faucibus stuck in a tree. Catnip eat the grass vehicula chase the red dot knock over the lamp, stuck in a tree rhoncus stuck in a tree neque quis nunc pellentesque. Vel sagittis feed me sagittis shed everywhere neque, cras nec suscipit chase the red dot sagittis. Attack your ankles elit claw sollicitudin purr scratched, puking suspendisse puking bibendum enim enim ut. Libero scratched orci turpis cras nec jump on the table nullam, catnip fluffy fur catnip nunc. Biting etiam feed me sollicitudin, litter box stuck in a tree climb the curtains bat chuf eat. Hairball dolor meow knock over the lamp hairball, libero quis enim feed me sunbathe nibh shed everywhere.",
      "date": "2015-01-15T00:00:00.000Z",
      "id": "bo2jwi",
      "tag_ids": ["2b", "doop5"],
      "title": "Teaching at Ada"
    }
  ];

  $scope.tags =
    [
    { "id": "1a", "name": "2cool4school" },
    { "id": "2b", "name": "kittycat" },
  { "id": "doop5", "name": "everything is awesome" },
{"id": "turtle", "name": "blah"}
  ];

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
