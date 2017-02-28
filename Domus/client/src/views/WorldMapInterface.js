var WorldMap = require('./WorldMap.js')

var WorldMapInterface = function(){
  }

WorldMapInterface.prototype= {

  createWorldMapInterface: function(){
    var body = document.querySelector('body');
    body.innerHTML = null;
    this.WorldMap = new WorldMap(10);

    console.log(this);

    this.createSideInfoBar();
    this.createBottomNavBar();
  },

  createSideInfoBar: function(){
   var body = document.querySelector('body');
   var sideBar = document.createElement('div');
   sideBar.className = "sideBar";
   sideBar.innerText = "I am a sideBar";
   body.appendChild(sideBar);

   var information = document.createElement('p')
   information.innerText = "This side bar will be for information on the clicked village"
   sideBar.appendChild(information);
  },



  createBottomNavBar: function(){
   var body = document.querySelector('body');
   var BottomNavBar = document.createElement('div');
   BottomNavBar.className ='bottomNavBar'; 
   BottomNavBar.innerText = "I am a navBar";
   body.appendChild(BottomNavBar);
  }
}

module.exports = WorldMapInterface;