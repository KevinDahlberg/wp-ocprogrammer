/**
 * @desc contains all of the database calls for the blog
 * @package theocdcoder
 * @version 1.0
 */

var postArray = [];

(function($) {

  function getPosts() {

    $.ajax({
      type: 'GET',
      url: WPsettings.root + 'wp/v2/posts',
      success: function(response) {
        postArray.push(response.data);
      }
    });
  }

})(jQuery);
