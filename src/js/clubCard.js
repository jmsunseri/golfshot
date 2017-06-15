var UI = require('ui');

var card = new UI.Menu({
        backgroundColor: 'white',
        color: 'dark-green',
        sections: [{ 
          title: 'Club'       
        }]
      });

var clubMenu = {
  Card: card,
  Initialize: function(hole, clubs) {
    var selectedIndex = 1;
    if(hole.Score.Club !== null)
      for(var i in card.sections[0].items.length)             
        if(card.sections[0].items[i].title === hole.Score.Club)          
          selectedIndex = i;      

    card.selection(0, selectedIndex);
    
    var items = [];
    
    for(var x in clubs)
      items.push({ title: clubs[x].Name});
    
    card.items(0, items);

    return card;
  }
  
};

this.exports = clubMenu;