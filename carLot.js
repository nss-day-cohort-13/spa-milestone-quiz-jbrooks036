// this is the first IIFE

var CarLot = (function (CarLot) {
  var inventory = [];

  // get the array of cars
  CarLot.getInventory = function () {
      return inventory;
    },

  // load the cars from the JSON file into private array
  CarLot.loadInventory = function (callback) {
    var inventoryLoader = new XMLHttpRequest();

    inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText);
      console.log("CarLot:17 / inventory = ", inventory);
      callback(inventory);
    });

    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();
  };

  console.log("CarLot.js:25 / CarLot = ", CarLot);
  return CarLot;

})(CarLot || {});

