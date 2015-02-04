

$(document).ready(function(){
	$("#login-content").hide();
	
	$('#login-trigger').click(function(event){
		//also can us .is() -this will test if jquery is currently changing the element
		//example with a conditional 
		/*
		if ( !$('#login-content').is(':animated')){
			$('#login-content').slideToggle();
		};
			This will make for a smoother effect because it will disable all  user interaction until the animation completes
			Unfortunately this way will not work in the instance due the hide animation that is called before this function
*/
			$('#login-content').stop(true, true).slideToggle();
	});

// This is going to be an attempt at a modal window for the guest button in the footer
var olay = $('<div class="overlay" />').appendTo(document.body).hide();
 var modal = $('<div class="modal" />').appendTo(document.body).hide();
 	
 	var openmodal = function(){
 		olay.add(modal).show().css({opacity:0});
 		olay.animate({opacity:.8});
 		modal
 			/*
.css({
	 			top: $(window).height()/2 - modal.outerHeight()/2 + $(window).scrollTop(),
	 			left: $(window).width()/2 - modal.outerWidth()/2 + $(window).scrollLeft()
 			})
*/
 			.animate({opacity:1});
 	};
 	var movemodal = function(){
	 	modal
	 		.stop(true)
 			.animate({
	 			top: $(window).height()/2 - modal.outerHeight()/2 + $(window).scrollTop(),
	 			left: $(window).width()/2 - modal.outerWidth()/2 + $(window).scrollLeft()
 			}, 300);
 	};
 	
 	var closemodal = function(){
	 	olay.add(modal).animate({opacity:0}, function(){	
			$(this).hide(); 	
	 	})
 	};

  $(".navItem").on('click' , function(){
  	
  	openmodal();
  	$(".modal").load("data/"+$(this).attr("id")+".html", function(){
	
		});
	return false;  
  });
  
  olay.on('click', closemodal);
  
  $(window).on('keyup', function(e){
	  if (e.which === 27 ){
		  closemodal();
	  }
  });





});




