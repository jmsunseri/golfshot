var UI = require('ui');


var card = new UI.Menu({
        backgroundColor: 'white',
        color: 'black',
        sections: [
          { 
            title: "Strokes"
          }
        ]
      });







var strokeMenu = {
  Card: card,
  Initialize: function(hole) {
    var items = [];         
    var selectedIndex = 0;
    for(var i = 1; i <= hole.Par*3; i++)
    {
      if(i === hole.Par -3)
        items.push({title: i, subtitle: "Double Eagle!!"});
      else if(i === hole.Par -2)
        items.push({title: i, subtitle: "Eagle!!"});
      else if(i === hole.Par -1)
        items.push({title: i, subtitle: "Birdie!!"});
      else if(i === hole.Par) {
        items.push({title: i, subtitle: "Par"});
        selectedIndex = i -1;
      }
      else if(i === hole.Par + 1)
        items.push({title: i, subtitle: "Bogey"});
      else if(i === hole.Par + 2)
        items.push({title: i, subtitle: "Double Bogey"});
      else if(i === hole.Par + 3)
        items.push({title: i, subtitle: "Triple Bogey"});
      else if(i === hole.Par + 4)
        items.push({title: i, subtitle: "Quadruple Bogey"});
      else
        items.push({title: i});
    }

    if(hole.Score.Strokes !== null)
      selectedIndex = hole.Score.Stroke -1;

    card.items(0, items);

    card.selection(0, selectedIndex);
    return card; 
  }
  
};

this.exports = strokeMenu;