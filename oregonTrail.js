const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/mainmenu', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/mainmenu.html'));
});
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/game.html'));
});
app.get('/topten', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/topten.html'));
});
app.get('/trail', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/trail.html'));
});
// require our gameController (so we can access the data in it)
var game = require('./controllers/gameController');
// create an API route so we can request a screen by sending the id (array index)
app.get('/game/getNewGameScreen/:screenId', function(req, res) {
// get the screen
var gameScreen = game.startGameScreens[req.params.screenId];
//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
res.setHeader('Content-Type', 'text/html');
res.send(gameScreen);
})

var profession 
app.get('/game/saveProfession/:profession', function(req, res) {
// get the saveProfession
game.gameSettings.Profession[req.params.professionId] = req.params.Profession
    console.log("settings : "+ game.gameSettings);
    

res.setHeader('Content-Type', 'text/plain');
res.send(game.gameSettings.Profession);
})

app.get('/game/savePlayerName/:playerId/:playerName', function(req, res) {
game.gameSettings.playerNames[req.params.playedId] = req.params.playerName
    console.log("settings : "+ game.gameSettings);
    

res.setHeader('Content-Type', 'text/plain');
res.send(game.gameSettings.playerName);
})
app.get('/game/saveStartMonth/:startMonth', function(req, res) {
// get the saveProfession
game.gameSettings.startMonth = req.params.startMonth;
})

app.get('/game/getSettings', function(req, res) {
res.setHeader('Content-type', 'application/json');
res.send(game.gameSettings);
})

app.get('/game/getUI', function(req, res) {
res.setHeader('Content-type', 'application/json');
res.send(game.getUI);
})

app.listen(1337, function () {
  console.log('OregonTrail Running on:1337')
});
