var UI = require('ui');

var card = new UI.Menu({
        backgroundColor: 'white',
        color: 'black',
        sections: [
          {
            title: "Penalty Shots"
          }
        ]
      });



var penaltyMenu = {
  Card: card,
  Initialize: function(hole) {
    var items = [];

    var selectedIndex = 0;

    if(hole.Score.Penalty === null){
      selectedIndex = 0;
    }
    else {
      selectedIndex = hole.Score.Penalty;
    }

    for(var i = 0; i <= hole.Score.Strokes - hole.Score.Putts - hole.Score.Sand; i++)
    {
      items.push({title: i});
    }

    card.items(0,items);

    card.selection(0, selectedIndex);
    return card; 
  }
  
};

this.exports = penaltyMenu;