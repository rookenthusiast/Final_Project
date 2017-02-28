var json = require('../../../village.json');
var unit = require('./Unit.js');
var resource = require('./Resource.js');
var race = require('./Race.js');

class Village {

  constructor(owner, coordinates, race) {
    this.owner = owner;
    this.buildings = [];
    // coordinates is an object {x:1,y:2}
    this.coordinates = coordinates;
    this.resources = [{
      food: 100,
      wood: 100,
      gold: 100
    }];
    this.race = race;
  }
}

module.exports = Village;