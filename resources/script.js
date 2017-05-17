$(document).ready(function() {
    
    /* For the sticky nagivation*/
 $('.js--section-features').waypoint(function (direction) {
     
     if (direction =='down'){
         $('nav').addClass('sticky');   
     }
     else {
         $('nav').removeClass('sticky');
         
     }
 }, {
      offset: '50px;'
    });    
    
    /*paragraph*/
    
    .long-copy {
  animation: pulse 5s infinite;
}
    /* Scroll on buttons */
    
    $('.home').click(function () {
        $('html, body').animate({scrollTop: $('.js--scroll-to-home').offset().top}, 1500);
       
    });
    
     $('.about').click(function () {
        $('html, body').animate({scrollTop: $('.js--scroll-to-about').offset().top}, 1500);
       
    });
    
     $('.photography').click(function () {
        $('html, body').animate({scrollTop: $('.js--scroll-to-photography').offset().top}, 1500);
       
    });
    
     $('.skills').click(function () {
        $('html, body').animate({scrollTop: $('.js--scroll-to-skills').offset().top}, 1500);
       
    });
    
    
    /* Animations on Scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
});