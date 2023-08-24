$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    })

    // showmenu option
    $('.show-menu').click(function(){
        $('.navbar .nav-item').toggleClass('active')
        $('.show-menu a i').toggleClass('active')
    });
});