var height=$('#header').height();
$(window).scroll(function(){
 if($(this).scrollTop()>height){
    $('.sticky').addClass('fixed');
    $('.logo').addClass('fixed');
 }else{
    $('.sticky').removeClass('fixed');
    $('.logo').removeClass('fixed');
 }
});
