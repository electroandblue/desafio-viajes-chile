$(document).ready(function () {

    // 1. INICIALIZACIÓN DE TOOLTIPS (Requisito nativo de Bootstrap 5)
    // Busca todos los elementos con 'data-bs-toggle="tooltip"' y los activa
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


    // 2. CAMBIO DE FONDO DEL NAVBAR AL HACER SCROLL
    // Transiciona el menú de transparente a negro sólido al bajar más de 50px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('navbar-scrolled');
        } else {
            $('#navbar').removeClass('navbar-scrolled');
        }
    });


    // 3. CONTROL DEL FORMULARIO Y ALERTA INTERACTIVA
    // Maneja el evento de envío de formulario mostrando la confirmación de éxito en pantalla
    $('#formContacto').on('submit', function (event) {
        event.preventDefault(); // Evita que la página se recargue

        const $alerta = $('#alertaExito');

        // Muestra la alerta removiendo la clase oculta y gatillando la animación
        $alerta.removeClass('d-none').addClass('show');

        // Resetea los campos de texto del formulario
        this.reset();

        // Cierra automáticamente la alerta después de 5 segundos para mejorar la UX
        setTimeout(function() {
            $alerta.removeClass('show').addClass('d-none');
        }, 5000);
    });

    // Permite cerrar la alerta de inmediato si el usuario presiona de forma manual el botón 'X'
    $('.alert .btn-close').on('click', function() {
        $(this).parent().removeClass('show').addClass('d-none');
    });

});

    // 4. CONTROL DEL FORMULARIO Y ALERTA INTERACTIVA
    // Maneja el evento de envío de formulario mostrando la confirmación de éxito en pantalla
    $('#formContacto').on('submit', function (event) {
        event.preventDefault(); // Evita que la página se recargue

        const $alerta = $('#alertaExito');

        // Muestra la alerta removiendo la clase oculta y gatillando la animación
        $alerta.removeClass('d-none').addClass('show');

        // Resetea los campos de texto del formulario
        this.reset();

        // Cierra automáticamente la alerta después de 5 segundos para mejorar la UX
        setTimeout(function() {
            $alerta.removeClass('show').addClass('d-none');
        }, 5000);
    });

    // Permite cerrar la alerta de inmediato si el usuario presiona de forma manual el botón 'X'
    $('.alert .btn-close').on('click', function() {
        $(this).parent().removeClass('show').addClass('d-none');
    });

});