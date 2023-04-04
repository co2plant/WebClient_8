var isVisible = false;
$(window).on('scroll',function(e){

    if(checkVisible($('.fade-in'))&&!isVisible){
        $('html,body').stop().animate({
            scrollTop:section1Top_Height
        },800);        
        directTextAniFunction();
        
        $('#intro').css('display','none')
        introAniFunction(this);

        isVisible=true;
    }
 
});

function checkVisible(elm,eval){
    eval=eval||"object visible";
    var viewportHeight=$(window).height(),
    scrolltop=$(window).scrollTop(),
    y=$(elm).offset().top,
    elementHeight=$(elm).height();


    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}