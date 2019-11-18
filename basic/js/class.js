class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

let zeus = new SpaceShuttle("Jupiter");

class Book {
  constructor(author) {
    this._author = author;
  }

  get writer() {
    return this._author;
  }

  set writer(author) {
    this._author = author;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(temp) {
      this._temp = temp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const theroms = new Thermostat(76);
