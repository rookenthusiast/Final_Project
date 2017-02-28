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
    
  }
}

module.exports = VillageView;