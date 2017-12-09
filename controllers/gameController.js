// first initialize the exports, this is where other node files (such as oregonTrail.js) will look
// for the data.
var exports = module.exports = {};

function gameSettings(){
	this.playerNames = [];
	this.profession = "";
	this.startMoney = 0;
	this.startMonth = "";
}
function getUI(){
	this.day = 1
	this.distance = 0
	this.groupHealth = 100
	this.weather = "";
	this.pace = "";
	this.startMoney = 0;
}

function refreshUI() {
  document.getElementById('stat-day').innerHTML = Math.ceil(this.caravan.day);
  document.getElementById('stat-distance').innerHTML = Math.floor(this.caravan.distance);
  document.getElementById('stat-crew').innerHTML = this.caravan.crew;
  document.getElementById('stat-weather').innerHTML = this.caravan.weather;
  document.getElementById('stat-pace').innerHTML = this.caravan.pace;
document.getElementById('stat-money').innerHTML = this.caravan.money;}

function weather(){
	document.getElementById('stat-weather').innerHTML = Math.floor((Math.random() * 10) + 1);
	if document.getElementById('stat-weather') = 'Very Hot'{
		document.getElementById('stat-crew').innerHTML - 8;
	}else if document.getElementById('stat-weather') = 'Hot'{
		document.getElementById('stat-crew').innerHTML - 3;
	}else if document.getElementById('stat-weather') = 'Warm'{
		document.getElementById('stat-crew').innerHTML + 1;
	}else if document.getElementById('stat-weather') = 'Cool'{
		document.getElementById('stat-crew').innerHTML + 1;
	}else if document.getElementById('stat-weather') = 'cold'{
		document.getElementById('stat-crew').innerHTML - 5;
	} else if document.getElementById('stat-weather') = 'Very Cold'{
		document.getElementById('stat-crew').innerHTML - 12;
	}else if document.getElementById('stat-weather') = 'Rain'{
		document.getElementById('stat-crew').innerHTML - 4;
	}else if document.getElementById('stat-weather') = 'Heavy Rain'{
		document.getElementById('stat-crew').innerHTML - 8;
	}else if document.getElementById('stat-weather') = 'Snow'{
		document.getElementById('stat-crew').innerHTML - 15;
	}else if document.getElementById('stat-weather') = 'Blizzard'{
		document.getElementById('stat-crew').innerHTML - 30;
	}else document.getElementById('stat-weather') = 'Fog'{
		document.getElementById('stat-crew').innerHTML - 3
}
function groupHealth(){
	  if document.getElementById('stat-crew') >= 80(
	    document.getElementById('stat-crew').innerHTML = "good";
	  )else if document.getElementById('stat-crew') >= 50(
	    document.getElementById('stat-crew').innerHTML = "fair";
		)else if document.getElementById('stat-crew') >= 20(
	    document.getElementById('stat-crew').innerHTML = "poor";
		)else if document.getElementById('stat-crew') = 10(
	    document.getElementById('stat-crew').innerHTML = "very poor";
		)else document.getElementById('stat-crew') = 0(
	    document.getElementById('stat-crew').innerHTML = "Dead";	
}

function moveCaravan(gameSettings){
	document.getElementById('caravan').html(gameSettings.terrain.imgUrl);
	var moveCara = document.getElementById('caravan').css('right');
	var pIndex = moveCara.indexOf('p')
	moveCara = parseInt(moveCara.substring(0, pIndex));
	moveCara += 1.8 * gameSettings.pace.presents;
	document.getElementById('caravan').css('right,moveCara');
	
}
function caravanPace(){
	if document.getElementById('stat-pace') = 'steady'{
		document.getElementById('stat-day').innerHTML + 20;
	}else if document.getElementById('stat-pace') = 'strenuous'{
		document.getElementById('stat-day').innerHTML + 25;
		document.getElementById('stat-crew').innerHTML - 3;
	}else if document.getElementById('stat-pace') = 'grueling'{
		document.getElementById('stat-day').innerHTML + 30;
		document.getElementById('stat-crew').innerHTML - 8;
	}else document.getElementById('stat-pace') = 'resting'{
		document.getElementById('stat-crew').innerHTML + 5;
}};
	
// Create an empty array to contain our screens
exports.startGameScreens = [];
exports.gameSettings = new gameSettings;
// create a string that will contain the first screen HTML
var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
+ "<p>You may:</p>"
+ "<ol id=\"setupQuestions1\" >"
+ "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
+ "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
+ "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
+ "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
+ "</ol>"
+ "<div id=\"selectedOption\">What is your choice?</div>"
+ '<link rel="stylesheet" type="text/css" href="/css/game.css">'
+ '<script src = "/js/game.js"></script>';
var startGame2 = '<p>Enter your wagon members names:</p>'
+ '<label for = "nameOne">Wagon Leader name</label>'
+ '<input name = "nameOne" id = "nameOne" value = "nameOne" input type = "text"></input><br>'
+ '<label for = "nameTwo">Wagon passenger name</label>'
+ '<input name = "nameTwo" id = "nameTwo" value = "nameTwo" input type = "text"></input><br>'
+ '<label for = "nameThree">Wagon passenger name</label>'
+ '<input name = "nameThree" id = "nameThree" value = "nameThree" input type = "text"></input><br>'
+ '<label for = "nameFour">Wagon passenger name</label>'
+ '<input name = "nameFour" id = "nameFour" value = "nameFour" input type = "text"></input><br>'
+ '<button id = "nextScreenButton" onclick = "nextGameButton()">Next</button>'
+ '<link rel="stylesheet" type="text/css" href="/css/game.css">'
+ '<script src = "/js/game.js"></script>';
var startGame3 = '<p>Enter the amount of money you would like to start with:</p>'
+ '<label for = "startMoney">Wagon Leader name</label>'
+ '<input name = "startMoney" id = "startMoney" value = "startMoney" input type = "text"></input><br>'
+ '<button id = "nextScreenButton" onclick = "nextGameButton()">Next</button>'
+ '<link rel="stylesheet" type="text/css" href="/css/game.css">'
+ '<script src = "/js/game.js"></script>';
var startGame4 = "<p>What month would you like to start in?</p>"
+ "<p>You may begin in:</p>"
+ "<ol id=\"setupQuestions4\" >"
+ "<li id=\"startMonth\">January</li>"
+ "<li id=\"startMonth\">February</li>"
+ "<li id=\"startMonth\">March</li>"
+ "<li id=\"startMonth\">April</li>"
+ "<li id=\"startMonth\">May</li>"
+ "<li id=\"startMonth\">June</li>"
+ "<li id=\"startMonth\">July</li>"
+ "<li id=\"startMonth\">August</li>"
+ "<li id=\"startMonth\">September</li>"
+ "<li id=\"startMonth\">October</li>"
+ "<li id=\"startMonth\">November</li>"
+ "<li id=\"startMonth\">December</li>"
+ "</ol>"
+ '<button id = "nextScreenButton" onclick = "nextGameButton()">Next</button>'
+ '<link rel="stylesheet" type="text/css" href="/css/game.css">'
+ '<script src = "/js/game.js"></script>';

// add our screen to the exports so it is available
exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);

