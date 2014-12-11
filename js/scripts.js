

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
});




