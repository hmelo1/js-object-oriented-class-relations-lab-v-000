let store = {drivers: [], passengers: [], trips: []}

let driverID = 0;
let passengerID = 0;
let tripID = 0;
class Driver {
  constructor(name){
    this.id = ++driverID;
    this.name = name;

    store.drivers.push(this);
  };
};

class Passenger{
  constructor(name){
    this.id = ++passengerID;
    this.name = name;

    store.passengers.push(this);
  };
};

class Trip{
  constructor(driver, passenger){
    this.id = ++tripID;
    this.driverId = driver.driverID;

    this.passengerId = passenger.passengerID;

    store.trips.push(this);
  }
}
