function Car(name, model, year, tag) {
  this.name = name;
  this.model = model;
  this.tag = tag;
  this.year = year;
}

Car.prototype = {
  getMake() {
    return this.make;
  },
  getModel() {
    return this.model;
  },
  getYake() {
    return this.year;
  },
  register() {
    this.registerd = true;
    this.renewDate = new Date();
  },
  renewRegistration() {
    this.renewDate = new Date();
  },
  getOwner() {
    return this.owner;
  },
  changeOwnership(newOwner) {
    this.owner = newOwner;
  }
};

const CarFactory = (function () {
  const cars = {};
  return {
    createCar(name, model, year, tag) {
      let car = cars[`${name}-${model}-${year}-${tag}`];
      if (!car) {
        car = new Car(name, model, year, tag);
        cars[`${name}-${model}-${year}-${tag}`] = car;
      }
      return car;
    }
  };
})();

const CarManager = (function () {
  const carsDetails = {};
  return {
    addCarRecord(name, model, year, tag, owner, registered = false) {
      const car = CarFactory.createCar(name, model, year, tag);
      if (!carsDetails[tag]) {
        carsDetails[tag] = {
          renewDate: new Date(),
          registered,
          owner
        };
      }
      return {...car, ...carsDetails[tag]};
    },
    changeOwnership(tag, newOwner) {
      carsDetails[tag].owner = newOwner;
    },
    changeTag(tag, newTag) {
      carsDetails[tag].tag = newTag;
    },
    renewRegistration(tag) {
      carsDetails[tag].renewDate = new Date();
    }
  };
})();

const myMercedez = CarManager.addCarRecord('mercedes', 'GL-550', 2018, 'ekene-1', 'Ekene', true);
console.log(myMercedez.renewDate);
console.log(myMercedez.name);
console.log(myMercedez.tag);

