(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function(){

        // console.log(window.location.pathname);
        // console.log(window.location.href);

        // if (document.querySelector("#secDestacados")) {
        //     console.log('Si encuentro el objeto de Vanilla');
        // } else {
        //     console.log('NO encuentro el objeto de Vanilla');            
        // };
        
        // CÓDIGO PARA ACTIVAR LA LIBRERÍA VANILLATILT, ANIMACIONES EN LAS CARD DEL INDEX.HTML
        if (document.querySelector("#secDestacados")) {
            VanillaTilt.init(document.querySelectorAll(".destacados_card"), {
                max: 20,
                speed: 400,
                glare: true,
                "max-glare": 1,
            });       
        };
        
        document.addEventListener('click', (e) => {
            e.preventDefault();

            console.log(e.target);        

            // BOTÓN PARA REPRODUCIR EL VÍDEO PROMOCIONAL
            if ( e.target.matches('#play') || e.target.matches('#close') || e.target.matches('#imgPlay') ) {
                toggleVideo();
            }

            // BOTÓN LATERAL PARA SUBIR AL INICIO DE LA PANTALLA
            if ( e.target.matches('#botInicio') ) {
                $('html, body').animate({
                    scrollTop: 0
                }, 600);        
            }

            // LINK A PAGINA DE INICIO
            if ( e.target.matches('#msInicio') || e.target.matches('#miInicio') || e.target.matches('#bot404')) {
                $(location).attr('href','index.html');    
            }            

            // LINK A PAGINA DEL MENÚ 
            if ( e.target.matches('#msMenu') || e.target.matches('#miMenu') || e.target.matches('#botMenu') || e.target.matches('#botSecMenu')) {
                $(location).attr('href','menu.html');    
            }            

            // LINK A PPAGINA DE LAS PROMOCIONES
            if ( e.target.matches('#msPromos') || e.target.matches('#miPromos') || e.target.matches('#botPromos')) {
                $(location).attr('href','promos.html');    
            }            

            // LINK A PPAGINA DE LAS GALERIA
            if ( e.target.matches('#msGaleria') || e.target.matches('#miGaleria') || e.target.matches('#botSecGaleria')) {
                $(location).attr('href','galeria.html');    
            }            

            // LINK A PPAGINA DE LAS BLOG
            if ( e.target.matches('#msBlog') || e.target.matches('#miBlog')) {
                $(location).attr('href','blog.html');    
            }            

            // LINK A PPAGINA DE LAS CONTACTO
            if ( e.target.matches('#msContacto') || e.target.matches('#miContacto') || e.target.matches('#botReservar')) {
                $(location).attr('href','contacto.html');    
            }            

        });

        // CÓDIGO PARA ACTIVAR EL SLIDER DE LAS RESEÑAS
        if (document.querySelector("#reseñas")) {            
            var swiper = new Swiper(".reseñas_slider", {
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                loop: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },                
                }
            });    
        };

        // CÓDIGO PARA ACTIVAR EL SLIDER DE LAS PROMOCIONES
        if (document.querySelector("#secOfertas")) {            
            var swiper = new Swiper(".ofertas", {
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                loop: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },                
                }
            });    
        };
        

    });

    // FUNCIÓN PARA ACTIVAR EL VIDEO Y REPRODUCIRLO AL ESTAR LA PANTALLA ACTIVA
    function toggleVideo() {
        const trailer = document.querySelector('.videoPopup');
        const video = document.querySelector('video');

        trailer.classList.toggle('active');
        video.currentTime = 0;
        if (trailer.classList.contains('active')) {
            video.play();            
        } else {
            video.pause();
        };
    }    

})();

