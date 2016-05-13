// this is the first IIFE

var CarLot = (function (CarLot) {
  var inventory = [];

  // get the array of cars
  CarLot.getInventory = function () {
    return inventory.cars;
  },

  // load the cars from the JSON file into private array
  CarLot.loadInventory = function (callback) {
    var inventoryLoader = new XMLHttpRequest();

    inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText);
      callback(inventory);
    });

    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();
  };

  return CarLot;

})(CarLot || {});

