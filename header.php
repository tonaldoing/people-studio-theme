<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo esc_url(get_stylesheet_uri()); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header id="main-header" class="bg-[#012D44] sticky top-0 left-0 w-full z-50 transition-colors duration-300">
    <div class="container mx-auto flex justify-between items-center px-4 relative">
        <!-- Logo -->
        <?php if (has_custom_logo()) : ?>
            <div class="site-logo">
                <?php
                $custom_logo_id = get_theme_mod('custom_logo');
                $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                if ($logo) {
                    echo '<a href="/"><img src="' . esc_url($logo[0]) . '" alt="Logo" class="w-[150px] md:w-[250px]"></a>';
                }
                ?>
            </div>
        <?php else : ?>
            <h1 class="text-2xl font-bold"><?php bloginfo('name'); ?></h1>
        <?php endif; ?>
        
        <!-- Navigation for Desktop -->
        <nav class="hidden md:flex space-x-4">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'flex space-x-4',
                'link_before' => '<span class="font-inter text-white hover:text-blue-500">',
                'link_after' => '</span>',
            ));
            ?>
        </nav>

        <!-- Hamburger Menu for Mobile -->
        <div class="hamburger md:hidden cursor-pointer z-60 relative">
            <svg class="w-6 h-6 text-white fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path class="hamburger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </div>
    </div>

    <!-- Overlay -->
    <div class="overlay hidden fixed inset-0 bg-black bg-opacity-50 z-40"></div>

    <!-- Mobile Menu -->
    <nav class="mobile-menu hidden fixed right-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col items-center justify-center space-y-6 text-lg z-50 transition-transform duration-300 transform translate-x-full">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => 'flex flex-col space-y-4',
            'link_before' => '<span class="hover:text-blue-500">',
            'link_after' => '</span>',
        ));
        ?>
    </nav>
</header>