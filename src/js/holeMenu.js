var UI = require('ui');

var card = new UI.Menu({
      backgroundColor: 'white',
      color: 'black',
      sections: [{
        items: [{
         title: 'Score'
        }, {
         title: 'Track'
        }]
       }]
    });

var holeMenu = {
  Card: card,
  Initialize: function() {
    return card;
  }
};

this.exports = holeMenu;
  





