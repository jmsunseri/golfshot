var UI = require('ui');

var card = new UI.Menu({
        backgroundColor: 'white',
        color: 'black',
        sections: [{ 
          title: 'Drive',
          items: [
            {title: 'Left', enum: 'LEFT'},
            {title: 'Center', enum: 'CENTER'},
            {title: 'Right', enum: 'RIGHT'},
            {title: 'Short', enum: 'SHORT'},
            {title: 'Long', enum: 'LONG'},
        ]       
        }]
      });

var driveMenu = {
  Card: card,
  Initialize: function(hole) {
    var selectedIndex = 1;
    if(hole.Score.Drive !== null)
      for(var i in card.sections[0].items.length)             
        if(card.sections[0].items[i].enum === hole.Score.Drive)          
          selectedIndex = i;      

    card.selection(0, selectedIndex);

    return card;
  }
  
};

this.exports = driveMenu;