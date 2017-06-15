var UI = require('ui');

var card = new UI.Menu({
        backgroundColor: 'white',
        color: 'black',
        sections: [
          { 
            title: "Sand Shots"
          }
        ]
      });


var sandMenu = {
  Card: card,
  Initialize: function(hole) {
    var items = [];
    var selectedIndex = 0;

    if(hole.Score.Sand === null){
      selectedIndex = 0;
    }
    else {
      selectedIndex = hole.Score.Sand;
    }

    for(var i = 0; i <= hole.Score.Strokes - hole.Score.Putts; i++)
    {
      items.push({title: i});
    }

    card.items(0, items);

    card.selection(0, selectedIndex);
    return card; 
  }
  
};

this.exports = sandMenu;