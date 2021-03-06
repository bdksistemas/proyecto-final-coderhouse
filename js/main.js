(function() {
    'use strict';

    // ? VARIABLES 
    var cerrado     = true;
    var menuLat     = false;

    document.addEventListener('DOMContentLoaded', function(){

        // console.log(window.location.pathname);
        // console.log(window.location.href);

        if (document.querySelector("#libAOS")) {
            AOS.init();
        }
        

        // * CÓDIGO PARA ACTIVAR LA LIBRERÍA VANILLATILT, ANIMACIONES EN LAS CARD DEL INDEX.HTML
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

            //console.log(e.target);        

            // ? BOTÓN PARA REPRODUCIR EL VÍDEO PROMOCIONAL
            if ( e.target.matches('#play') || e.target.matches('#close') || e.target.matches('#imgPlay') ) {
                toggleVideo();
            }

            // ? BOTÓN LATERAL PARA SUBIR AL INICIO DE LA PANTALLA
            if ( e.target.matches('#botInicio') ) {
                $('html, body').animate({
                    scrollTop: 0
                }, 100);        
            }

            // ? LINK A PAGINA DE INICIO
            if ( e.target.matches('#msInicio') || e.target.matches('#miInicio') || e.target.matches('#bot404')) {
                $(location).attr('href','index.html');    
            }            

            // ? LINK A PAGINA DEL MENÚ 
            if ( e.target.matches('#msMenu') || e.target.matches('#miMenu') || e.target.matches('#botMenu') || e.target.matches('#botSecMenu')) {
                $(location).attr('href','menu.html');    
            }            

            // ? LINK A PPAGINA DE LAS PROMOCIONES
            if ( e.target.matches('#msPromos') || e.target.matches('#miPromos') || e.target.matches('#botPromos')) {
                $(location).attr('href','promos.html');    
            }            

            // ? LINK A PPAGINA DE LAS GALERIA
            if ( e.target.matches('#msGaleria') || e.target.matches('#miGaleria') || e.target.matches('#botSecGaleria')) {
                $(location).attr('href','galeria.html');    
            }            

            // ? LINK A PPAGINA DE LAS BLOG
            if ( e.target.matches('#msBlog') || e.target.matches('#miBlog')) {
                $(location).attr('href','blog.html');    
            }            

            // ? LINK A PPAGINA DE LAS CONTACTO
            if ( e.target.matches('#msContacto') || e.target.matches('#miContacto') || e.target.matches('#botReservar')) {
                $(location).attr('href','contacto.html');    
            } 

            // ? ICONO DEL MENÚ HAMBURGUESA
            if ( e.target.matches('#botApp')) {
                menuLat = true;
                apertura();
            }

            // ? LINK A WHATSAPP
            if ( e.target.matches('#botWP')) {
                let url = 'https://api.whatsapp.com/send?phone=528118222666&text=Hola,%20necesito%20informes%20de%20su%20restaurante';
                window.open(url, '_blank');
            } 

            // ? LINKS A FACEBOOK
            if ( e.target.matches('.botFB')) {               
                let url = 'https://www.facebook.com/';
                window.open(url, '_blank');
            } 

            // ? LINKS A ISNTAGRAM
            if ( e.target.matches('.botInsta')) {
                console.log('Si recibo el click de Insta');                
                let url = 'https://www.instagram.com/';
                window.open(url, '_blank');
            } 

            // ? LINKS A YOUTUBE
            if ( e.target.matches('.botYT')) {
                let url = 'https://www.youtube.com/';
                window.open(url, '_blank');
            } 


            // * fin del EvenListener de los clicks
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
                },
                pagination: {
                    el: '.swiper-pagination',
                  },
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
                },
                pagination: {
                    el: '.swiper-pagination',
                  },
            });    
        };
        
        preparaPopups();

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

    // ! FUNCIÓN PARA ABRIR EL MENÚ CUANDO EL TAMAÑO SEA TABLET O MÓVIL
    function apertura() {
        let menu    = document.getElementById('menuSup');
        let botSubir = document.getElementById('botInicio');
        if (cerrado) {
            menu.style.width = '70vw';
            cerrado = false;
            if (botSubir) {
                botSubir.style.visibility = 'hidden';
            }
        } else {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
            menuLat = false;
            if (botSubir) {
                botSubir.style.visibility = 'visible';
            }
        }
        menu.classList.toggle('menu2');
    };   

    // ! SE ACTIVAN LOS POPOVER Y TOOLTIP DE BOOTSTRAPT 
    function preparaPopups() {        
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
        
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }

})();

