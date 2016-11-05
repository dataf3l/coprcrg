var desired_location = 0;
var default_speed = 150; // px
var timer_speed = 50; // ms
var the_timer = null;
var last_desired_location = 0;
function scrollTo(desired_location){
	last_desired_location = desired_location;
	//var sw = window.screen.width;
	//var sw = document.body.clientWidth;
	var sw = window.innerWidth;
	//if(Math.abs(document.body.scrollLeft - desired_location * sw) > (sw * 4)){
	document.body.scrollLeft =  desired_location * sw;
	//	return;
	//}

	var speed = Math.min(default_speed, Math.abs(document.body.scrollLeft - desired_location * sw));
	if(document.body.scrollLeft > desired_location * sw) {
		document.body.scrollLeft= (parseFloat(document.body.scrollLeft) - speed) ;
	}
	if(document.body.scrollLeft < desired_location * sw) {
		document.body.scrollLeft= (speed + parseFloat(document.body.scrollLeft)) ;
	}
	if(Math.abs(document.body.scrollLeft - desired_location * sw)<2) {
		clearTimeout(the_timer);
	}
	
	if(document.body.scrollLeft != desired_location * sw){
		clearTimeout(the_timer);
		the_timer = setTimeout(function(){scrollTo(desired_location)}, timer_speed);
	}
	//document.body.scrollLeft = ( * pos);
}
window.onresize = function(event) {
	scrollTo(last_desired_location);
};
