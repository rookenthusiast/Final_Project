var unit = require('./Unit.js');
var resource = require('./Resource.js');
var race = require('./Race.js');
var buildings = require('../../../buildings.json');

class Village {

  constructor(coordinates, race) {
    this.buildings = Object.create(buildings);
    // coordinates is an object {x:1,y:2}
    this.coordinates = coordinates;
    this.resources = [{
      food: 100,
      wood: 100,
      gold: 100
    }];
    this.race = race;
  }

  upgradeBuilding(building) {
    this.buildings[building].level++;

    const keys = Object.keys(this.buildings.base_cost)
    
    for (let resource of keys) {
      Math.floor(this.buildings[building].cost[resource] *= this.buildings[building].cost_multiplier);

      this.resources[resource] -= this.buildings[building].cost[resource];
    }
  }


}

module.exports = Village;