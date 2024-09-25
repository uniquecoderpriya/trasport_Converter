const vehicles = [
  { name: "Maruti Suzuki Alto", topSpeed: 140, fuelEfficiency: 22.05, fuelTank: 35, maxRange: 771.75 },
  { name: "Hyundai i20", topSpeed: 180, fuelEfficiency: 20.35, fuelTank: 37, maxRange: 753.05 },
  { name: "Tata Nexon", topSpeed: 180, fuelEfficiency: 17.57, fuelTank: 44, maxRange: 772.68 },
  { name: "Honda City", topSpeed: 180, fuelEfficiency: 17.8, fuelTank: 40, maxRange: 712.0 },
  { name: "Mahindra Thar", topSpeed: 155, fuelEfficiency: 15.2, fuelTank: 57, maxRange: 866.4 },
  { name: "Toyota Innova Crysta", topSpeed: 179, fuelEfficiency: 11.25, fuelTank: 55, maxRange: 618.75 },
  { name: "Kia Seltos", topSpeed: 170, fuelEfficiency: 16.8, fuelTank: 50, maxRange: 840.0 },
  { name: "Renault Kwid", topSpeed: 150, fuelEfficiency: 22.3, fuelTank: 28, maxRange: 624.4 },
  { name: "Ford EcoSport", topSpeed: 182, fuelEfficiency: 15.9, fuelTank: 52, maxRange: 826.8 },
  { name: "Tata Tiago", topSpeed: 150, fuelEfficiency: 23.84, fuelTank: 35, maxRange: 834.4 },
  { name: "Bajaj Pulsar", topSpeed: 135, fuelEfficiency: 45, fuelTank: 15, maxRange: 675 },
  { name: "KTM Duke 390", topSpeed: 167, fuelEfficiency: 30, fuelTank: 13.5, maxRange: 405 },
  { name: "Honda CBR 150R", topSpeed: 135, fuelEfficiency: 40, fuelTank: 12, maxRange: 480 },
  { name: "Yamaha YZF R15", topSpeed: 136, fuelEfficiency: 40, fuelTank: 11, maxRange: 440 },
  { name: "Suzuki Gixxer", topSpeed: 130, fuelEfficiency: 50, fuelTank: 12, maxRange: 600 },
  { name: "TVS Apache RTR 200", topSpeed: 128, fuelEfficiency: 35, fuelTank: 12, maxRange: 420 },
  { name: "Kawasaki Ninja 300", topSpeed: 180, fuelEfficiency: 30, fuelTank: 17, maxRange: 510 },
  { name: "Mercedes-Benz Sprinter", topSpeed: 120, fuelEfficiency: 8, fuelTank: 75, maxRange: 600 },
  { name: "Volvo 9700", topSpeed: 100, fuelEfficiency: 6, fuelTank: 300, maxRange: 1800 },
  { name: "Ashok Leyland Bus", topSpeed: 80, fuelEfficiency: 5, fuelTank: 200, maxRange: 1000 },
  { name: "Tata Starbus", topSpeed: 90, fuelEfficiency: 6, fuelTank: 180, maxRange: 1080 },
];

document.getElementById("calculateBtn").addEventListener("click", function () {
  const distance = parseFloat(document.getElementById("distance").value);
  const selectedVehicleName = document.getElementById("vehicleSelect").value;

  if (!distance || !selectedVehicleName) {
      alert("Please enter a valid distance and select a vehicle.");
      return;
  }

  const selectedVehicle = vehicles.find(vehicle => vehicle.name === selectedVehicleName);
  const time = distance / selectedVehicle.topSpeed;
  const fuelNeeded = distance / selectedVehicle.fuelEfficiency;

  const results = {
      selected: {
          name: selectedVehicle.name,
          topSpeed: selectedVehicle.topSpeed,
          fuelEfficiency: selectedVehicle.fuelEfficiency,
          fuelTank: selectedVehicle.fuelTank,
          maxRange: selectedVehicle.maxRange,
          time: time.toFixed(2),
          fuelNeeded: fuelNeeded.toFixed(2),
          status: fuelNeeded > selectedVehicle.maxRange ? 'Out of range' : 'In range'
      },
      others: vehicles.filter(vehicle => vehicle.name !== selectedVehicleName).map(vehicle => {
          const otherTime = distance / vehicle.topSpeed;
          const otherFuelNeeded = distance / vehicle.fuelEfficiency;
          return {
              name: vehicle.name,
              topSpeed: vehicle.topSpeed,
              fuelEfficiency: vehicle.fuelEfficiency,
              fuelTank: vehicle.fuelTank,
              maxRange: vehicle.maxRange,
              time: otherTime.toFixed(2),
              fuelNeeded: otherFuelNeeded.toFixed(2),
              status: otherFuelNeeded > vehicle.maxRange ? 'Out of range' : 'In range'
          };
      })
  };

  const encodedResults = encodeURIComponent(JSON.stringify(results));
  window.location.href = `results.html?data=${encodedResults}`;
});
