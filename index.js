let store = {drivers: [], passengers: [], trips: []}

let driverID = 0;

class Driver {
  constructor(name){
    this.id = ++driverID;
    this.name = name;

    store.drivers.push(this);
  };
};
