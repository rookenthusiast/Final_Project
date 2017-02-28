var WorldMapInterface = require('./WorldMapInterface.js')

var UserPortal = function(){
  this.createUserPortalPage();
}

UserPortal.prototype= {
  
  createUserPortalPage: function(){
    var body = document.querySelector('body');
    body.innerHTML = null;
    var logo = document.createElement('img');
    logo.src = "images/hearth_fire_placeholder_logo.png"
    logo.className = "front_page_logo"
    this.createEntryButton();
    body.appendChild(logo);
  },

  createEntryButton: function(){
    var body = document.querySelector('body');
    var button = document.createElement('button');
    button.onclick = new WorldMapInterface();
    body.appendChild(button);
    ;
  }
}

module.exports = UserPortal;

