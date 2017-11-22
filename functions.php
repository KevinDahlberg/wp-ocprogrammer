<?php
/**
 * enqueue scripts and styles
 */

function theme_scripts() {
  wp_enqueue_style ('stylesheet', get_stylesheet_uri() );

  //adds the compiled react file
  wp_enqueue_script ('built_js', get_template_directory_uri() . '/public/bundle.js', array(), 1.0, true);

  //makes various wordpress settings available for use in the JS
  wp_localize_script('queries', 'WPsettings', array(
			'root' => esc_url_raw( rest_url() )
		));

}
add_action( 'wp_enqueue_scripts', 'theme_scripts');

function register_menus() {
  register_nav_menus(
    array(
      'header_menu' => __( 'Header Menu' )
    )
  );
}
add_action( 'init', 'register_menus' );

function list_menus() {
  $menu_name = wp_get_nav_menus();
  $menus = wp_get_nav_menu_items( '2');

  return $menus;
}

function register_routes() {
  register_rest_route( 'wp/v2', '/menus', array(
    array(
      'methods' => 'GET',
      'callback' => 'list_menus'
    )
    ));
}
add_action( 'rest_api_init', 'register_routes')

?>
