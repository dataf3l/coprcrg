var desired_location = 0;
var default_speed = 150; // px
var timer_speed = 25; // ms
function scrollTo(desired_location){
	var sw = window.screen.width;
	var speed = Math.min(default_speed, Math.abs(document.body.scrollLeft - desired_location * sw));
	if(document.body.scrollLeft > desired_location * sw) {
		document.body.scrollLeft-= speed;
	}
	if(document.body.scrollLeft < desired_location * sw) {
		document.body.scrollLeft+= speed;
	}
	if(document.body.scrollLeft != desired_location * sw){
		setTimeout(function(){scrollTo(desired_location)}, timer_speed);
	}
	//document.body.scrollLeft = ( * pos);
}
