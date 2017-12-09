function gameScreen(screenNumber) {
var gameContainer = document.getElementById("gameContainer");
// make async call to server to get requested gameScreen html
fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
if (response.status !== 200) {
console.log('problem with ajax call! ' + response.status + " msg: " +
response.value);
return;
}
response.text().then(function(data) {
// send the html returned back to the
//console.log("received back: " + data);
gameContainer.innerHTML = data;
})
});
}
gameScreen(0);

nextGameButton.addEventListener("nextScreenButton".function(a){
	if (currentScreen==1){
		currentScreen++
	}
};
	
	
	
	
function saveProfession(profession) {

fetch('/game/saveProfession/' + profession).then(function(response) {
if (response.status !== 200) {
console.log('problem with ajax call! ' + response.status + " msg: " +
response.value);
return;
}
response.text().then(function(data)
}};

saveProfession();


function startMonth(startMonth) {

fetch('/game/saveStartMonth/' + startMonth).then(function(response) {
if (response.status !== 200) {
console.log('problem with ajax call! ' + response.status + " msg: " +
response.value);
return;
}
response.text().then(function(data)
}};

startMonth();

function saveName(name){
	fetch('/game/savePlayerName/:playerId/:playerName' + name).then(function(response) {
if (response.status !== 200) {
console.log('problem with ajax call! ' + response.status + " msg: " +
response.value);
return;
}
response.text().then(function(data)
}};
saveName();
	

gameContainer.addEventListener("click".function(e){
	var targetElement = event.target || event.arcElement;
	if(currentScreen==0){
		if(targetElement.id == "bankerMenuItem"){
			saveProfession("banker");
			currentScreen++;
			gameScreen();
		}
		if(targetElement.id == "carpentMenuItem"){
			saveProfession("carpenter");
			currentScreen++;
			gameScreen();
		}

		if(targetElement.id == "farmerMenuItem"){
			saveProfession("farmer");
			currentScreen++;
			gameScreen();
		}
	}else if(currentScreen==1){
		if(targetElement.id == "nameOne"){
			playerName = document.getElementById('nameOne').innerHTML = settings.playerName[0];
			saveName("");
			gameScreen();
		}if(targetElement.id == "nameTwo"){
			playerName = document.getElementById('nameTwo').innerHTML = settings.playerName[1];
						saveName("");
			gameScreen();
		}
		if(targetElement.id == "nameThree"){
			playerName = document.getElementById('nameThree').innerHTML = settings.playerName[2];
						saveName("");
			gameScreen();
		}
		if(targetElement.id == "nameFour"){
			playerName = document.getElementById('nameFour').innerHTML = settings.playerName[3];
			saveName("");
			gameScreen();
		}
	}
}

	function showSettings(){
    fetch("/game/getSettings").then(function(response)){
               response.json().then(function(data)){
                populateSettings(data);
            return data;                    
   };
};
};

function saveSettings(settings){
    if(currentScreen==1){
        document.getElementById('nameOne').innerHTML = settings.playerName[0];
         document.getElementById('nameTwo').innerHTML = settings.playerName[1];
             document.getElementById('nameThree').innerHTML = settings.playerName[2];
               document.getElementById('nameFour').innerHTML = settings.playerName[3];
        document.getElementById('startMonth').innerHTML = settings.startMonth;
                document.getElementById('startMoney').innerHTML = settings.startMoney;
        
    }
}