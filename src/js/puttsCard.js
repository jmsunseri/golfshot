var UI = require('ui');

var card = new UI.Menu({
        backgroundColor: 'white',
        color: 'black',
        sections: [
          { 
            title: "Putts"
          }
        ]
      });


var puttsMenu = {
  Card: card,
  Initialize: function(hole) {
    var items = [];
    var selectedIndex = 0;

    if(hole.Score.Putts === null){
      if(hole.Score.Strokes <= 1)
        selectedIndex = 0;
      else if(hole.Score.Strokes <=2)
        selectedIndex = 1;
      else
        selectedIndex = 2;
    }
    else {
      selectedIndex = hole.Score.Putts;
    }


    for(var i = 0; i <= hole.Score.Strokes; i++)
    {
      items.push({title: i});
    }

    card.items(0,items);

    card.selection(0, selectedIndex);
    return card;
  }
  
};

this.exports = puttsMenu;