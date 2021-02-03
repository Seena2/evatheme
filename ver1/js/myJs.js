var height=$('#header').height();
$(window).scroll(function(){
 if($(this).scrollTop()>height){
    $('.stickyNav').addClass('fixed');
    $('.logo').addClass('fixed');
 }else{
    $('.stickyNav').removeClass('fixed');
    $('.logo').removeClass('fixed');
 }
});

