<?php
/**
 * enqueue scripts and styles
 */

function theme_scripts() {
  wp_enqueue_style ('stylesheet', get_stylesheet_uri() );

  //adds the JS file that queries the DB
  wp_enqueue_script ('queries', get_template_directory_uri() . '/src/queries.js', array('jquery'), 1.0, false);

  //adds the compiled react file
  wp_enqueue_script ('bundle', get_template_directory_uri() . '/client/assets/bundle.js', true);

}
add_action( 'wp_enqueue_scripts', 'theme_scripts');

?>
