var CarLot = (function (Carlot) {

  function populatePage (inventory) {
    var carArray = inventory.cars;
    var numCars = carArray.length;

    // Loop over the inventory and populate the page
    for (i=0; i<numCars; i++) {
      car = inventory.cars[i];
      console.log("car = ", car);
      carDetails = "";

      // make html string for card
      carDetails += `<h2>Make: ${car.make}</h2>`;

      // post card to DOM
      console.log("carDetails = ", carDetails);
    }

    // Now that the DOM is loaded, establish all the event listeners needed
    // CarLot.activateEvents();
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete
  CarLot.loadInventory(populatePage);

})(CarLot || {});
