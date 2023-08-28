/*
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    });

    // showmenu option
    $('.show-menu').click(function(){
        $('.navbar .nav-item').toggleClass('active')
        $('.show-menu i').toggleClass('active')
    });
});
*/
$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20){
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Toggle menu
    $('.show-menu').click(function(){
        $('.navbar .nav-item').toggleClass('active');
        $('.show-menu i').toggleClass('active');
        $('.navbar .nav-item ul li').removeClass('active');
      

        
        // Automatically close the menu if the navbar is not sticky
        if (!$(window).scrollTop() > 20) {
            $('.navbar .nav-item').removeClass('active');
            $('.show-menu i').removeClass('active');
        }
    });
});
//typeing
var typed = new Typed(".typeing", {
    strings:["Frontend Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typeing-1", {
    strings:["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


