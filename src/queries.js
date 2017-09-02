/**
 * @desc contains all of the database calls for the blog
 * @package theocdcoder
 * @version 1.0
 */

var postArray = [];
console.log(WPsettings.root);
(function($) {

  function getPosts() {

    $.ajax({
      type: 'GET',
      url: WPsettings.root + 'wp/v2/posts',
      success: function(response) {
        console.log(response[0].content.rendered);
        postArray.push(response);
      }
    });
  }

  getPosts();

})(jQuery);
