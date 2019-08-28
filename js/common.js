//gnb
$(document).ready(function(){
    var subbg=$('<div class="subbg"></div>');
    subbg.appendTo('header');

    $('.subbg, .subnav').slideUp(0);

    $('.gnb').hover(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
        $('.bwrap').stop().addClass('on');
    },function(){
    $('.subnav, .subbg').stop().slideUp('fast');
        $('.bwrap').stop().removeClass('on'); 
    });
    
    $('.mainnav').focus(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
        $('.bwrap').stop().addClass('on');
    });

    
    $('.subnav li:last a').keydown(function(e){
        if(e.keyCode==9){
            if(!e.shiftKey){
                $('.subnav, .subbg').stop().slideUp('fast');
                $('.bwrap').stop().removeClass('on'); 
            }
        }
    });
    
     $('.mainnav').first().keydown(function(e){
        if(e.keyCode==9){ 
            if(e.shiftKey){ 
                $('.subnav, .subbg').stop().slideUp('fast') ;
                $('.bwrap').stop().removeClass('on'); 
        }
        }
    });
    
}); //gnb


//aside quick bar
$(function(){  
    $('aside.quick').fadeOut(0);
    
    function quick(){
        var top = $(window).scrollTop();
        var w = $(window).width();
        
        if(top>260 && w > 1300){
            $('aside.quick').stop().fadeIn(600, 'easeOutQuart');
        }else{
            $('aside.quick').stop().fadeOut(600, 'easeOutQuart');
        }
        
    }
    
    quick();
    
    $(window).scroll(function(){
        quick();
    });
    
    $(window).resize(function(){
        quick();
    });


});//quick bar


//aside totop
$(document).ready(function(){
	$().UItoTop({
        easingType: 'easeOutQuart',
        scrollSpeed: 1200
    });
});//to top
    

//loginopen, joinopen
    $(function(){
    $('.loginopen').colorbox({
        iframe:true,
        innerWidth:500, 
        innerHeight:750 
    });
});
    $(function(){
    $('.joinopen').colorbox({
        iframe:true,
        innerWidth:500, 
        innerHeight:750 
    });
})
