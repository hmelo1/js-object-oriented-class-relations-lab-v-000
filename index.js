let driverID = 0;

class Driver {
  constructor(name){
    this.id = ++driverID;
    this.name = name;
  };
};
