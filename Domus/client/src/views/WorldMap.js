var Grid = require('../models/Grid.js');

var WorldMap = function(size){
 this.grid = new Grid(size);
 this.canvas = document.querySelector('#main-canvas');
 this.context = this.canvas.getContext('2d');
 this.drawMap();

 this.canvas.onclick = function (event) {
  console.log(event);
 }
}

WorldMap.prototype= {
  drawMap: function(){
    for (var y = 0; y < this.grid.size; y++) {
      for (var x = 0; x < this.grid.size; x++) {
        // var tile = new Image();
        var tile = document.createElement('img');
        tile.xPos = x * 100;
        tile.yPos = y * 100;
        
        if (this.grid.grid[y][x] === 0) {
          tile.src = 'images/grass_tile.jpeg';
        }
        
        if (this.grid.grid[y][x] === 1) {
          tile.src = 'images/water_tile.gif';
        }

        var self = this;
        tile.onload = function() {
          self.context.drawImage(this, this.xPos, this.yPos, 100, 100);
        };
      }
    }
  }
}

module.exports = WorldMap;
