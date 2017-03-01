var unit = require('./Unit.js');
var race = require('./Race.js');
var buildings = require('../../../buildings.json');

class Village {

  constructor(coordinates, race) {
    this.buildings = Object.create(buildings);
    // coordinates is an object {x:1,y:2}
    this.coordinates = coordinates;
    this.units = [{
      "Bowman": 0,
      "Spearman": 0,
      "Knight": 0,
      "Horseman": 0,
      "Royal guard": 0,
      "Trebuchet": 0
    }];
    this.resources = [{
      food: 100,
      wood: 100,
      gold: 100
    }];
    this.race = race;
  }

  upgradeBuilding(building) {
    this.buildings[building].level++;

    const keys = Object.keys(this.buildings.base_cost);
    
    for (let resource of keys) {
      Math.floor(this.buildings[building].cost[resource] *= this.buildings[building].cost_multiplier);

      this.resources[resource] -= this.buildings[building].cost[resource];
    }
  }

  addUnit(type) {
    const keys = Object.keys(this.units);
    for (unit of keys) {
      if (this.units[unit] === type) {
        unit.value++;
      }
    }
  }

  calculateCost(building) {
    const keys = Object.keys(this.buildings.base_cost);
    const lvl = this.buildings[building].level;
    
    for (let resource of keys) {
      Math.floor(this.buildings[building].cost[resource] *= this.buildings[building].cost_multiplier);
    }
  }
}

module.exports = Village;