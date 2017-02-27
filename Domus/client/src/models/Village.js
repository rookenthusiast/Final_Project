var json = require('../../../village.json');
var unit = require('./Unit.js');
var resource = require('./Resource.js');
var race = require('./Race.js');

class Village {

  constructor(owned_by, coordinates, resources, race) {
    this.owned_by = owned_by;
    this.buildings = [];
    // coordinates is an object {x:1,y:2}
    this.coordinates = coordinates;
    this.resources = resources;
    this.race = race;
    this.garrison = [];
  }
}

module.exports = Village;