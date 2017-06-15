var UI = require('ui');

var card = new UI.Menu({
      backgroundColor: 'white',
      color: 'black',
      sections: [{
        items: [{
         title: 'I\'m at my ball!'
        }, {
         title: 'Cancel'
        }]
       }]
    });

var trackMenu = {
    Initialize: function() {
      //holeCard = hCard;
      return card; 
    }
};

this.exports = trackMenu;
