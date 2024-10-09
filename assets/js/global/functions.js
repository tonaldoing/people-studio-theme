jQuery(document).ready(function($) {
    // Alternar menú y overlay al hacer clic en la hamburguesa
    $('.hamburger').on('click', function() {
        $('.mobile-menu').toggleClass('hidden translate-x-full');
        $('.overlay').toggleClass('hidden');

        // Cambiar el ícono de hamburguesa a "X" y su color
        $('.hamburger-icon').toggleClass('open');
        if ($('.hamburger-icon').hasClass('open')) {
            $('.hamburger-icon').attr('d', 'M6 18L18 6M6 6l12 12'); // Cambia a la "X"
            $('.hamburger').addClass('text-black'); // Asegurar que sea visible
        } else {
            $('.hamburger-icon').attr('d', 'M4 6h16M4 12h16M4 18h16'); // Vuelve a las líneas de hamburguesa
            $('.hamburger').removeClass('text-black'); // Mantener el color original
        }
    });

    // Cuando se hace clic en el overlay, cerrar el menú
    $('.overlay').on('click', function() {
        $('.mobile-menu').toggleClass('hidden translate-x-full');
        $('.overlay').toggleClass('hidden');

        // Volver el ícono de "X" a hamburguesa
        $('.hamburger-icon').attr('d', 'M4 6h16M4 12h16M4 18h16');
        $('.hamburger').removeClass('text-black');
    });

    // Cerrar el menú al hacer clic en un ítem del menú móvil
    $('.mobile-menu .scroll-link a').on('click', function() {
        $('.mobile-menu').addClass('hidden translate-x-full');
        $('.overlay').addClass('hidden');

        // Volver el ícono de "X" a hamburguesa
        $('.hamburger-icon').attr('d', 'M4 6h16M4 12h16M4 18h16');
        $('.hamburger').removeClass('text-black');
    });

    // Scroll suave al hacer clic en cualquier elemento con la clase .scroll-link
    $('.scroll-link').on('click', function(e) {
        e.preventDefault();  // Previene el comportamiento predeterminado del enlace

        // Acceder al href del <a> dentro del elemento .scroll-link (li)
        const targetId = $(this).find('a').attr('href').substring(1);  // Obtiene el ID de la sección desde el <a>
        
        // Buscar la sección de destino usando el ID
        const targetSection = $('#' + targetId);

        // Si existe la sección, se hace scroll hacia ella
        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top - 50 // Ajusta según la altura de tu header sticky
            }, 800);  // Ajusta la duración de la animación (en milisegundos)
        }
    });

    // Guardamos todos los enlaces dentro del menú del header (por ejemplo, un nav con el ID #header-nav)
    const menuLinks = $('#menu-main .scroll-link a');
    
    // Función para verificar qué sección está visible
    function onScroll() {
        const scrollPos = $(document).scrollTop(); // Obtiene la posición del scroll actual

        // Iterar sobre todos los enlaces del menú
        menuLinks.each(function() {
            const currLink = $(this);
            const targetId = currLink.attr('href').substring(1); // El ID de la sección objetivo
            const targetSection = $('#' + targetId);

            // Verifica si la sección está en el viewport
            if (targetSection.length && targetSection.position().top <= scrollPos + 60 && targetSection.position().top + targetSection.height() > scrollPos) {
                // Remueve la clase active de todos los enlaces y luego añade solo al enlace correspondiente
                menuLinks.removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    }

    // Ejecutar la función cuando se hace scroll
    $(document).on('scroll', onScroll);

    // Asegurarse de que la función se ejecute al cargar la página
    onScroll();

        // Función para manejar el clic en los botones de navegación de servicios móviles
        $('.service-navigation button').on('click', function() {
            // Obtener el índice del botón en el que se hizo clic
            const index = $(this).index();

            // Seleccionar la sección correspondiente al índice del botón
            const targetService = $('.service-card').eq(index);

            // Verificar que la sección exista y hacer scroll hacia ella
            if (targetService.length) {
                // Calcular la posición del desplazamiento para que la sección se muestre adecuadamente
                const offsetTop = targetService.offset().top - 70;

                $('html, body').animate({
                    scrollTop: offsetTop
                }, 800); // Duración de la animación en milisegundos
            }
        });    
    
});
