var elem = document.getElementById("p5");
var audio = new Audio('/music/campfire.mp3');

function checkSound() {
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    console.log(currentSound);
    if (currentSound == "true") {
        // start music
        audio.play();
    } else {
        // Stop the music
        audio.pause();
    }
    
}
checkSound();

document.onkeypress = function(event){
	var x = event.which
	if(x==52){
	var currentSound = sessionStorage.getItem('soundStatus');
    if(currentSound == "true") {
        currentSound = "false";
    }
    else {
        currentSound = "true";
    }
    console.log(currentSound);
    sessionStorage.setItem('soundStatus', currentSound)

    var myElement = document.getElementById("p5");
    myElement.innerHTML = "4. Toggle Sound" + (currentSound ? "" : "On &nbsp;&nbsp;");
	}
    
    //(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
    checkSound();
}


