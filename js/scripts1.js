$(document).ready(function(){


var divs = $('a.button1');
$(window).scroll(function(){
   if($(window).scrollTop()<10){
         divs.stop(true,true).fadeIn();
   } else {
         divs.stop(true,true).fadeOut();
   }
});

});