$(function(){ 
    var today = new Date();
    var year = today.getFullYear();
    var yopt = '';  
    var mopt = '';  
    var dopt = '';  
            
    for(var i=year;i>=1900;i--){
        yopt += '<option>'+ i +'</option>';
    }
    $('#birthYear').html(yopt);
            
    for(var i=1;i<=12;i++){
        mopt += '<option>'+ i +'</option>';
    }
    $('#birthMonth').html(mopt);
            
             
    function bDate(y,m){
        var date = [31,28,31,30,31,30,31,31,30,31,30,31];
                
        if(y % 4 ==0 && y % 100 !=0 || y % 400 == 0){
            date[1] = 29;
        }
        dopt ='';
        for(var i=1;i<=date[m-1];i++){
            dopt +='<option>'+ i +'</option>';
        }
        $('#birthDate').html(dopt);
    }
     
    bDate(year,1);
    
    $('#birthYear, #birthMonth').change(function(){
        var y = $('#birthyear').val();
        var m = $('#birthMonth').val();
        bDate(y,m);
    });
});