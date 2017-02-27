var Grid = require('../models/Grid.js');

var WorldMap = function(size){
 this.grid = new Grid(size);
 this.canvas = document.querySelector('#main-canvas');
 this.context = this.canvas.getContext('2d');
 this.createNewTile("orcs",2,2);
 this.createNewTile("elves",1,4);
 this.drawMap();

 this.canvas.onclick = function (event) {
  console.log(event);
 }
}

WorldMap.prototype= {

  createNewTile: function(element,x,y){
    switch(element) {
        case "orcs":
            this.grid.grid[x][y] = 2 ;
            break;
        case "elves":
            this.grid.grid[x][y] = 3;
            break;
        default:
            this.grid.grid[x][y] = 0;
    }
  },

  drawMap: function(){
    for (var y = 0; y < this.grid.size; y++) {
      for (var x = 0; x < this.grid.size; x++) {
        // var tile = new Image();
        var tile = document.createElement('img');
        tile.xPos = x * 50;
        tile.yPos = y * 50;
        
        if (this.grid.grid[y][x] === 0) {
          tile.src = 'images/grass_tile.jpeg';
        }
        
        if (this.grid.grid[y][x] === 1) {
          tile.src = 'images/water_tile.gif';
        }

        if (this.grid.grid[y][x] === 2) {
          tile.src = 'images/orc_skull_base.png';
        }

        if (this.grid.grid[y][x] === 3) {
          tile.src = 'images/elf_tree.png';
        }

        var self = this;
        tile.onload = function() {
          self.context.drawImage(this, this.xPos, this.yPos, 50, 50);
        };
      }
    }
  }
}

module.exports = WorldMap;
