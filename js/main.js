(function() {
    'use strict';

    VanillaTilt.init(document.querySelectorAll(".destacados_card"), {
        max: 20,
        speed: 400,
        glare: true,
        "max-glare": 1,
    });       
    
    document.addEventListener('click', (e) => {
        e.preventDefault();

        if ( e.target.matches('#play') || e.target.matches('#close') || e.target.matches('#imgPlay') ) {
            toggleVideo();
        }

    });

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

