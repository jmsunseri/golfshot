var UI = require('ui');
var Vector2 = require('vector2');
//var HoleMenu = require('holeMenu');

var card = new UI.Window({
      backgroundColor: 'white',
      color: 'dark-green'
    });



var yardsField = new UI.Text({
  position: new Vector2(0, 35),
  size: new Vector2(card.size().x, 35),
  font: 'roboto-bold-subset-49',
  //text: scoreCard.Holes[index].Yards,
  textAlign: 'center',
  color: 'dark-green',
});
    
var yardsLabelField = new UI.Text({
  position: new Vector2(0, 80),
  size: new Vector2(card.size().x, 25),
  font: 'gothic-18-bold',
  text: 'yards',
  textAlign: 'center',
  color: 'dark-green'//,
  //borderColor: 'black'
});

var holeLabelField = new UI.Text({
  position: new Vector2(0, 100),
  size: new Vector2(card.size().x/2, 25),
  font: 'gothic-18-bold',
  text: 'Hole #',
  textAlign: 'center',
  color: 'dark-green'//,
  //borderColor: 'black'
});

var rect = new UI.Rect({
  backgroundColor: 'dark-green',
  position: new Vector2(0, 0),
  size: new Vector2(card.size().x, 40)
});

var summaryField = new UI.Text({
  position: new Vector2(0, 15),
  size: new Vector2(card.size().x, 35),
  font: 'gothic-18-bold',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'clear'
});

// var line = new UI.Line({
//   position: new Vector2(0, 30),
//   position2: new Vector2(card.size().x, 30),
//   strokeColor: 'dark-green',
//   strokeWidth: 2
// });

var holeField = new UI.Text({
  position: new Vector2(0, 120),
  size: new Vector2(card.size().x/2, 25),
  font: 'gothic-18-bold',
  //text: scoreCard.Holes[index].Number,
  textAlign: 'center',
  color: 'dark-green'
});

var parLabelField = new UI.Text({
  position: new Vector2(card.size().x/2, 100),
  size: new Vector2(card.size().x/2, 25),
  font: 'gothic-18-bold',
  text: 'Par',
  textAlign: 'center',
  color: 'dark-green'//,
  //borderColor: 'black'
});

var parField = new UI.Text({
  position: new Vector2(card.size().x/2, 120),
  size: new Vector2(card.size().x/2, 25),
  font: 'gothic-18-bold',
  textAlign: 'center',
  color: 'dark-green'
});

var hdcLabelField = new UI.Text({
  position: new Vector2(0, 120),
  size: new Vector2(card.size().x, 25),
  font: 'gothic-18-bold',
  text: 'HDCP',
  textAlign: 'center',
  color: 'dark-green'
});

var hdcField = new UI.Text({
  position: new Vector2(0, 140),
  size: new Vector2(card.size().x, 25),
  font: 'gothic-18-bold',
  textAlign: 'center',
  color: 'dark-green'
});

// card.add(line);
card.add(yardsField);
card.add(yardsLabelField);
card.add(holeLabelField);
card.add(holeField);
card.add(parLabelField);
card.add(parField);
card.add(hdcLabelField);
card.add(hdcField);
card.add(rect);
card.add(summaryField);





var holeCard = {
  Initialize: function(hole, scoreCard) {

    var holesPlayed = 0;
    var score = 0;
    
    console.log(JSON.stringify(scoreCard));
    
    for(var x = 0; x < scoreCard.Holes.length; x++)
    {
      console.log("I had "+ scoreCard.Holes[x].Score.Strokes + " strokes on hole " + scoreCard.Holes[x].Number);
      
      if(scoreCard.Holes[x].Score.Strokes > 0)
      {
        holesPlayed = holesPlayed + 1;
        score = score + scoreCard.Holes[x].Score.Strokes - scoreCard.Holes[x].Par;
      }
    }
    
    var summaryText = "";
    
    if(holesPlayed > 0){
      summaryText = "after " + holesPlayed + ((holesPlayed > 1) ? " holes " : " hole "   );
      summaryText = summaryText + ((score > 0) ? ("+" + score) : (score < 0) ? ("-" + score) : "-");
    }
    
    //var summaryText = "after " + holesPlayed; // + ((holesPlayed > 1) ? " holes " : " hole "   );
    
    //summaryText += ((score > 0) ? ("+" + score) : (score < 0) ? ("-" + score) : "-");
      
    console.log("summary: "+ holesPlayed);
    summaryField.text(summaryText);
    
    yardsField.text(hole.Yards);
    holeField.text(hole.Number);
    parField.text(hole.Par);
    hdcField.text(hole.Handicap);

    return card;
  }
};
  
this.exports = holeCard;
