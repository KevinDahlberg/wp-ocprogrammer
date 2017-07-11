<?php
/**
 * enqueue scripts and styles
 */

function theme_scripts() {
  wp_enqueue_style ('stylesheet', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts');

?>
