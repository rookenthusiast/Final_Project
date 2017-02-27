var village = require('./Village.js');

class Grid {

  constructor(size) {
    this.size = size;
    this.grid = [];
    this.initializeGrid();
  }

  initializeGrid() {
    for (let i = 0; i < this.size; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.size; j++) {
        this.grid[i].push(0);
      }
    }
  }
}

module.exports = Grid;