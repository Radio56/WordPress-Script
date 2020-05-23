<?php

function sergios_theme() {
  wp_enqueue_script( 'extra_code', get_stylesheet_directory_uri() . 'js/extra_code/js_script'
}

add_action( 'wp_enqueue_scripts', 'sergios_theme' );
