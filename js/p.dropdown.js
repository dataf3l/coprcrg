/**
 * this program helps a simple dropdown menu, given that bootstrap's dropdown menu
 * had problems with this particular layout.
 * */


/** a global that holds the Timer pointer. */
var g_dropdown_timer = null;


/** this gets executed when people click the "Portafolio" menu item, 
 * the parameter div_id is a string and must reference a div inside the <li>
 * for it to work properly.
 * */
function open_dropdown(div_id){
	/** Check existance of div or bail otherwise. */
	if(document.getElementById(div_id) === null){
		alert("Element missing");
		return;
	}

	var d = document.getElementById(div_id);
	/** Actually show the element */
	d.style.display = "block";
	d.onmouseout = function(){
		/* when users leave the div for short periods of time (below 1ms)
		 * then wait a little before we hide, for usability purposes. */
		var timeout_in_ms = 500
		g_dropdown_timer = setTimeout(function(){hide_dropdown(div_id);}, timeout_in_ms);
	}

	/* after the user leaves and comes back, we need to disable the timer
	 * in order to allow short exits.
	 * */
	d.onmouseover = function(){
		if(g_dropdown_timer != null){
			clearTimeout(g_dropdown_timer);
		}
	}
}
/* 
 * Hide the div by modifying DOM properties directly.
 * */
function hide_dropdown(div_id){
	var d = document.getElementById(div_id);
	d.style.display = "none";
}
