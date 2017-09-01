
const postsAPI = {
  requestPost: function() {
  return
    $.ajax({
      type: 'GET',
      url: WPsettings.root + 'wp/v2/posts',
      success: (response => {
        return {
          postArray: response[0].content.rendered,
        }
      })
    });
  }
}

export default postsAPI
