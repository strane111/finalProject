var elem = document.getElementById("fadeText");

document.onkeypress = function(event){
	var x = event.which
	if(x==32){
	window.location = "mainmenu";
	}else{
	document.onkeypress = function(){
	(console.log("You need to press spacebar"));
	}}
}
var box = document.getElementById('fadeText');

function fadeOutIn(elem, speed ) {

    if (!elem.style.opacity) {
        elem.style.opacity = 1;
    } // end if

    var outInterval = setInterval(function() {
        elem.style.opacity -= 0.02;
        if (elem.style.opacity <= 0) {
            clearInterval(outInterval);
            var inInterval = setInterval(function() {
                elem.style.opacity = Number(elem.style.opacity)+0.02;
                if (elem.style.opacity >= 1)
                    clearInterval(inInterval);
            }, speed/50 );
        } // end if
    }, speed/50 );

} // end fadeOut()

fadeOutIn(fadeText, 2000 );