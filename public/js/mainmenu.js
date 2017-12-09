var elem = document.getElementById("p0");

document.onkeypress = function(event){
	var x = event.which
	if(x==49){
	window.location = "game";
	}else{
	document.onkeypress = function(){
	(console.log("press 1 to go to the game"));
	}}
}
