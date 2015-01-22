var filtersModule = angular.module('filtersModule', []);

filtersModule.filter('selectedTags', function() {
  return function(posts, tagFilter) {
    return posts.filter(function(post) {

      for (var i = 0; i < tagFilter.length; i++) {
        if (post.tag_ids.indexOf(tagFilter[i]) === -1) {
          return false;
        };

      };
      return true;
    });
  };
});
