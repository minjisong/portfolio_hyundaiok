$(document).ready(function(){
    $('.mobilebtn').fadeOut(0);

    var mobile_keys = new Array('iPhone','iPod','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');

    if(document.URL.match('move_pc_screen')){
        mobile_keys = null;
        $('.mobilebtn').fadeIn(0);
    }

    for(i in mobile_keys){       
        if(navigator.userAgent.match(mobile_keys[i]) != null){
            location.assign('http://mhyundaiok.dothome.co.kr');   
        }
    }
});