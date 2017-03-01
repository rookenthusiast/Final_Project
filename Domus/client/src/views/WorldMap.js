var Grid = require('../models/Grid.js');
var Village = require('../models/Village.js');
var VillageView = require('./VillageView.js')

var WorldMap = function(size){
 this.grid = new Grid(size);
 var jgrid = JSON.stringify(this.grid.grid)
 db.game.maps.insert(jgrid);
 var body = document.querySelector('body');
 var canvas = document.createElement('canvas');
 canvas.id = 'main-canvas';
 canvas.width = 500;
 canvas.height = 500;
 body.appendChild(canvas);

 this.canvas = document.querySelector('#main-canvas');
 this.context = this.canvas.getContext('2d');
 this.addVillage(3);
 this.drawMap();

 this.canvas.onclick = function (event) {
  var xCoord = event.offsetX;
  var yCoord = event.offsetY;
  this.onClickHandlerToVillage(xCoord, yCoord);
}.bind(this)
}

WorldMap.prototype= {

  drawMap: function(){
    for (var y = 0; y < this.grid.size; y++) {
      for (var x = 0; x < this.grid.size; x++ ) {
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
  },

  createRandomNums: function() {
    var rnd1 = Math.floor(10*Math.random());
    var rnd2 = Math.floor(10*Math.random());
    console.log(rnd1, rnd2);
    return [rnd1, rnd2];
  },

  addVillage: function(raceNum){
    var randoms = this.createRandomNums();
    console.log("add village started");  
    var flattenedGrid = [].concat.apply([], this.grid.grid)
    var hasSpace = flattenedGrid.includes(0);

    if (!hasSpace) {
      return;
    }
    else if 
      (this.grid.grid[randoms[0]][randoms[1]] === 0) {
        this.grid.grid[randoms[0]][randoms[1]] = raceNum;
        var newVillage = new Village({x: randoms[0], y: randoms[1]}, raceNum);
        var jvillage =JSON.stringify(newVillage);
        db.game.maps.villages.insert(jvillage);
      } else {
        console.log("calling add village")
        this.addVillage(raceNum);
      }
    },

    onClickHandlerToVillage: function(xCoord, yCoord){
      var coordinates = [Math.floor(xCoord/50), Math.floor(yCoord/50)]
      console.log(coordinates);
    }
  }

  module.exports = WorldMap;
