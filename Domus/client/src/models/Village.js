import React from 'react';

class Village {

  constructor(owned_by, buildings, coordinates, resources, race, units) {
    this.owned_by = owned_by;
    this.buildings = buildings;
    this.coordinates = coordinates;
    this.resources = resources;
    this.race = race;
    this.units = units;
  }
}

export default Village;