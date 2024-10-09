<?php

//admin bar
add_filter('show_admin_bar', '__return_true');

// Theme setup
function people_studio_theme_setup() {
    // Custom Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'people-studio'),
    ));

    // Theme support features
    add_theme_support('post-thumbnails');  // Featured Images
    add_theme_support('title-tag');  // Dynamic title tag
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('editor-styles');
    add_editor_style('style-editor.css');  // Gutenberg editor styles
}
add_action('after_setup_theme', 'people_studio_theme_setup');

// Customizer support
function people_studio_customize_register($wp_customize) {
    // Header Text Color
    $wp_customize->add_setting('header_text_color', array(
        'default'   => '#000000',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'header_text_color_control', array(
        'label'    => __('Header Text Color', 'people-studio'),
        'section'  => 'colors',
        'settings' => 'header_text_color',
    )));

    // Text Color
    $wp_customize->add_setting('text_color', array(
        'default'   => '#1C3D5A',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'text_color_control', array(
        'label'    => __('Text Color', 'people-studio'),
        'section'  => 'colors',
        'settings' => 'text_color',
    )));

    // Añadir sección para el logo del footer
    $wp_customize->add_section('footer_logo_section', array(
        'title'    => __('Footer Logo', 'people-studio'),
        'priority' => 30,
        'description' => __('Upload a custom logo for the footer', 'people-studio'),
    ));

    // Añadir setting para el logo del footer
    $wp_customize->add_setting('footer_logo', array(
        'default'   => '',
        'transport' => 'refresh',
    ));

    // Control para subir el logo del footer
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_logo', array(
        'label'    => __('Footer Logo', 'people-studio'),
        'section'  => 'footer_logo_section',
        'settings' => 'footer_logo',
    )));
}
add_action('customize_register', 'people_studio_customize_register');


// Enqueue styles and scripts
function people_studio_enqueue_assets() {
    // Enqueue Tailwind CSS for frontend with dynamic versioning
    wp_enqueue_style(
        'tailwind-main-css',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/main.css') // Version based on file modification time
    );

    // Enqueue Google Fonts (load only required variants)
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lato:wght@300&display=swap',
        array(),
        null
    );

    // Enqueue jQuery (si no está ya encolado por WordPress)
    wp_enqueue_script('jquery');
    
    // Enqueue custom JS (functions.js) en el footer
    wp_enqueue_script(
        'custom-functions-js',
        get_template_directory_uri() . '/assets/js/global/functions.js', 
        array('jquery'), 
        true 
    );
}
add_action('wp_enqueue_scripts', 'people_studio_enqueue_assets');


// Enqueue editor styles for Gutenberg
function people_studio_enqueue_editor_assets() {
    // Enqueue Tailwind CSS for the block editor with dynamic versioning
    wp_enqueue_style(
        'tailwind-editor-css',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/main.css')
    );
}
add_action('enqueue_block_editor_assets', 'people_studio_enqueue_editor_assets');

// Register and enqueue block scripts
function people_studio_register_blocks() {
    wp_register_script(
        'people-studio-blocks',
        get_template_directory_uri() . '/build/index.js',
        array('wp-blocks', 'wp-element', 'wp-editor')
    );
    
    // Register blocks (e.g., hero block)
    register_block_type('people-studio/hero', array(
        'editor_script' => 'people-studio-blocks',
    ));
}
add_action('init', 'people_studio_register_blocks');

// Localize block script to pass template directory URI
function people_studio_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'people-studio-blocks',
        get_template_directory_uri() . '/build/index.js',
        array('wp-blocks', 'wp-editor', 'wp-element'),
        null,
        true
    );

    wp_localize_script('people-studio-blocks', 'peopleStudioData', array(
        'templateUrl' => get_template_directory_uri(),
    ));
}
add_action('enqueue_block_editor_assets', 'people_studio_enqueue_block_editor_assets');
