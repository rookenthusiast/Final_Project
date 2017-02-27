var village = require('Village.js');

class Player {

  constructor(name, password, email, game) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.game = game;
  }
}

export default Player;