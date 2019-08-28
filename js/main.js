//mainslider
$(function(){
    $('.mslider .flexslider').flexslider({
        animation: "fade",  
        slideshowSpeed: 5000,
        pausePlay: true
    });    
});

//menu swiper
$(function(){
    var swiper = new Swiper('.swiper-container', { 
       slidesPerView: 3, 
       spaceBetween: 20, 
       slidesPerGroup: 1, 
       loop: true, 
       loopFillGroupWithBlank: true, 
       
       navigation: { 
         nextEl: '.swiper-button-next', 
         prevEl: '.swiper-button-prev',
       }, 
    }); 
});
