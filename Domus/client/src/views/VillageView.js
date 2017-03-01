var Village = require("../models/Village.js")

var VillageView = function(){

}

VillageView.prototype = {
  
  createVillageView: function(){
    var body = document.querySelector('body');
    body.innerHTML = null;
    var viewContainer = document.createElement('div');
    viewContainer.id = "village_view_container";
  },

  createVillageDiv: function(){
    var viewContainer = document.querySelector('#village_view_container')
    var villageContainer = document.createElement('div');
    villageContainer.className = "village_container";
    viewContainer.appendChild(villageContainer);
  }
}

module.exports = VillageView;