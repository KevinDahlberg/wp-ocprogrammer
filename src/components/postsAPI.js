
export default {
  $.ajax({
    type: 'GET',
    url: WPsettings.root + 'wp/v2/posts',
    success: function(response) {
      postArray.push(response.data);
    }
  });
}
