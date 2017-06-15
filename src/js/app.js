/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

//var UI = require('ui');
var HoleCard = require('holeCard');
var HoleMenu = require('holeMenu');
var ScoreCard = require('scoreCard');
var Hole = require('hole');
var Club = require('club');
var Bag = require('bag');
var TrackMenu = require('trackMenu');
var Stroke = require('strokeCard');
var Drive = require('driveCard');
var Putt = require('puttsCard');
var Sand = require('sandCard');
var Penalty = require('penaltyCard');

var ClubCard = require('clubCard');

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

var i = 0;

var scoreCard = new ScoreCard();

var getNewHole = function () {
  var yards = getRandom(100,600);
  var par = (yards < 275) ? 3 : (yards < 490) ? 4 : 5;
  var hdc = getRandom(1,18);
  
  console.log("yards: "+ yards + " hdc: "+ hdc + " par: " + par + " hole #: "+ (i+1));
  
  return new Hole(yards, hdc, par, i+1);
  
};

var bag = new Bag();

var fetchClubs = function() {
  bag.Clubs = [
    { Name: "1W" },
    { Name: "3W" },
    { Name: "2Hy" },
    { Name: "4Hy" },
    { Name: "5i" },
    { Name: "6i" },
    { Name: "7i" },
    { Name: "8i" },
    { Name: "9i" },
    { Name: "PW" },
    { Name: "GW" },
    { Name: "SW" },
    { Name: "LW" },
    { Name: "P" }
  ];
};

var bag = new Bag();

scoreCard.Holes.push(getNewHole());



var hole = scoreCard.Holes[i];

console.log(JSON.stringify(scoreCard));

var holeCard = HoleCard.Initialize(hole, scoreCard);

var holeMenu = HoleMenu.Initialize();
var strokeCard = Stroke.Card;
var trackMenu = TrackMenu.Initialize();
var driveMenu = Drive.Card;
var puttMenu = Putt.Card;
var sandMenu = Sand.Card;
var penaltyMenu = Penalty.Card;

fetchClubs();
var clubMenu = ClubCard.Initialize(hole, bag.Clubs);






holeMenu.on('select', function(e){
  if(e.itemIndex === 0){
    //console.log("trying to open up stroke card " + JSON.stringify(sc));
    strokeCard = Stroke.Initialize(hole);
    strokeCard.show();
  }else {
    trackMenu.show();
  }
});

trackMenu.on('select', function(e){
    if(e.itemIndex === 0){
      //Put logic here to save the tracked shot
      trackMenu.hide();
    }else {
      trackMenu.hide();
    }
});

strokeCard.on('select', function(e){
  hole.Score.Strokes = e.item.title;
  
  console.log("strokes has been set to: " + e.item.title);

  if(hole.Par > 3){
    driveMenu = Drive.Initialize(hole);
    driveMenu.show();
  }
  else {
    puttMenu = Putt.Initialize(hole);
    puttMenu.show();
  }
    
});

puttMenu.on('select', function(e){
  hole.Score.Putts = e.item.title;

  clubMenu.show();
});

clubMenu.on('select', function(e){
  hole.Score.Club = e.item.title;

  sandMenu = Sand.Initialize(hole);
  sandMenu.show();
});


  
driveMenu.on('select', function(e){
  hole.Score.Drive = e.item.enum;

  console.log("drive has been set to:" + e.item.enum);

  puttMenu = Putt.Initialize(hole);
  puttMenu.show();
});

sandMenu.on('select', function(e){
  hole.Score.Sand = e.item.title;

  penaltyMenu = Penalty.Initialize(hole);
  penaltyMenu.show();
});

penaltyMenu.on('select', function(e){
  hole.Score.Penalty = e.item.title;
  if(i < 18){  
    i++;
    scoreCard.Holes.push(getNewHole());   
    hole = scoreCard.Holes[i];
    HoleCard.Initialize(hole,scoreCard);
    holeCard.show();
  }
  else {
    //do something here to end or save the round.  Probably display your final score maybe allow you to scroll through your holes
  }
});


holeCard.on('click', 'select', function(e){
  holeMenu.show();
});

holeCard.on('click', 'back', function(e){
  if(i > 0)
  {
    i--;
    hole = scoreCard.Holes[i];
    HoleCard.Initialize(hole, scoreCard);
    holeCard.show();
  }
  else{
    holeCard.hide();
  }
});

holeCard.on('click', 'up', function(e){
  if(i > 0)
  {
    i--;
    hole = scoreCard.Holes[i];
    HoleCard.Initialize(hole, scoreCard);
    holeCard.show();
  }
});

holeCard.on('click', 'down', function(e){
  if(scoreCard.Holes.length > i + 1){
    i++;
    hole = scoreCard.Holes[i];
    HoleCard.Initialize(hole, scoreCard);
    holeCard.show();
  }
  else {
    scoreCard.Holes.push(getNewHole());
    i++;
    hole = scoreCard.Holes[i];
    HoleCard.Initialize(hole, scoreCard);
    holeCard.show();
  }
  
  
});



holeCard.show();


