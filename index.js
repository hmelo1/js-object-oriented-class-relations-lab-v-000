let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;
let passengerId = 0;
let tripId = 0;
class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  };
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.is
    })
  }
};

class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  };
};

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.driverId;

    this.passengerId = passenger.passengerId;

    store.trips.push(this);
  }
}
