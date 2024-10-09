<footer class="bg-[#012D44] text-white pt-20 pb-5 px-4" id="footer">
    <div class="container mx-auto text-center space-y-4">
        <!-- Title -->
        <h2 class="text-3xl font-bold">Get in touch with us</h2>
        <!-- Subtitle -->
        <p class="text-lg leading-relaxed py-5">We’d love to hear from you. Connect with us on LinkedIn or drop us an email.</p>

        <!-- Icons Section -->
        <div class="flex flex-col md:flex-row justify-center items-center mt-4 gap-10">
            <!-- Email Icon and Text -->
            <div class="flex items-center space-x-2">
                <div class="rounded-full p-2 border-2 border-white hover:border-blue-500 transition duration-300 hover:bg-blue-500 transform hover:scale-110">
                    <a href="mailto:example@example.com" class="flex items-center justify-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/png/icon-email.png" alt="Email Icon" class="h-8 w-8">
                    </a>
                </div>
                <a href="mailto:example@example.com" class="text-lg" target="_blank">example@example.com</a>
            </div>

            <!-- LinkedIn Icon and Text -->
            <div class="flex items-center space-x-2">
                <div class="rounded-full p-2 border-2 border-white hover:border-blue-500 transition duration-300 hover:bg-blue-500 transform hover:scale-110">
                    <a href="https://linkedin.com" class="flex items-center justify-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/png/icon-linkedin.png" alt="LinkedIn Icon" class="h-8 w-8">
                    </a>
                </div>
                <a href="https://linkedin.com" class="text-lg" target="_blank">linkedin.com/in/example</a>
            </div>
        </div>

        <!-- Logo and Site Information -->
        <div class="mt-8">
            <?php if (get_theme_mod('footer_logo')) : ?>
                <!-- Display the footer custom logo -->
                <div class="flex justify-center items-center space-x-4 py-5">
                    <div>
                        <img src="<?php echo esc_url(get_theme_mod('footer_logo')); ?>" alt="Footer Logo" class="w-80 h-auto">
                    </div>
                </div>
            <?php else : ?>
                <!-- If no footer logo, display the standard custom logo or site title and tagline -->
                <?php if (has_custom_logo()) : ?>
                    <div class="flex justify-center items-center space-x-4 py-5">
                        <div>
                            <?php the_custom_logo(); ?>
                        </div>
                    </div>
                <?php else : ?>
                    <p class="font-bold text-lg"><?php bloginfo('name'); ?></p>
                    <p class="text-sm"><?php bloginfo('description'); ?></p>
                <?php endif; ?>
            <?php endif; ?>
        </div>

        <!-- Copyright -->
        <p class="text-sm mt-4">&copy; <?php echo date('Y'); ?>. All rights reserved.</p>
    </div>
    <?php wp_footer(); ?>
</body>
</html>

