var Hole = function(yards, handicap, par, number) {
  
  this.Yards = yards;
  this.Handicap = handicap;
  this.Par = par;
  this.Number = number;
  this.Score = {
    Strokes: null,
    Drive: null,
    Putts: null,
    Penalty: null,
    Sand: null,
    Club: null
  };

  return this;
};

this.exports = Hole;