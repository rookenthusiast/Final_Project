var WorldMap = require('./WorldMap.js')

var WorldMapInterface = function(){
  this.WorldMap = new WorldMap(15)
  this.createBottomNavBar();
}

WorldMapInterface.prototype= {
  createBottomNavBar: function(){
   var body = document.querySelector('body');
   var sideBar = document.createElement('div');
   sideBar.className ='sideBar'; 
   sideBar.innerText = "I am a sidebar";
   body.appendChild(sideBar);
  }
}

module.exports = WorldMapInterface;