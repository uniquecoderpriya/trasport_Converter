const vehicles = [
  {
    name: "Maruti Suzuki Alto",
    topSpeed: 140,
    fuelEfficiency: 22.05,
    fuelTank: 35,
    maxRange: 771.75,
  },
  {
    name: "Hyundai i20",
    topSpeed: 180,
    fuelEfficiency: 20.35,
    fuelTank: 37,
    maxRange: 753.05,
  },
  {
    name: "Tata Nexon",
    topSpeed: 180,
    fuelEfficiency: 17.57,
    fuelTank: 44,
    maxRange: 772.68,
  },
  {
    name: "Honda City",
    topSpeed: 180,
    fuelEfficiency: 17.8,
    fuelTank: 40,
    maxRange: 712.0,
  },
  {
    name: "Mahindra Thar",
    topSpeed: 155,
    fuelEfficiency: 15.2,
    fuelTank: 57,
    maxRange: 866.4,
  },
  {
    name: "Toyota Innova Crysta",
    topSpeed: 179,
    fuelEfficiency: 11.25,
    fuelTank: 55,
    maxRange: 618.75,
  },
  {
    name: "Kia Seltos",
    topSpeed: 170,
    fuelEfficiency: 16.8,
    fuelTank: 50,
    maxRange: 840.0,
  },
  {
    name: "Renault Kwid",
    topSpeed: 150,
    fuelEfficiency: 22.3,
    fuelTank: 28,
    maxRange: 624.4,
  },
  {
    name: "Ford EcoSport",
    topSpeed: 182,
    fuelEfficiency: 15.9,
    fuelTank: 52,
    maxRange: 826.8,
  },
  {
    name: "Tata Tiago",
    topSpeed: 150,
    fuelEfficiency: 23.84,
    fuelTank: 35,
    maxRange: 834.4,
  },
  {
    name: "Bajaj Pulsar",
    topSpeed: 135,
    fuelEfficiency: 45,
    fuelTank: 15,
    maxRange: 675,
  },
  {
    name: "KTM Duke 390",
    topSpeed: 167,
    fuelEfficiency: 30,
    fuelTank: 13.5,
    maxRange: 405,
  },
  {
    name: "Honda CBR 150R",
    topSpeed: 135,
    fuelEfficiency: 40,
    fuelTank: 12,
    maxRange: 480,
  },
  {
    name: "Yamaha YZF R15",
    topSpeed: 136,
    fuelEfficiency: 40,
    fuelTank: 11,
    maxRange: 440,
  },
  {
    name: "Suzuki Gixxer",
    topSpeed: 130,
    fuelEfficiency: 50,
    fuelTank: 12,
    maxRange: 600,
  },
  {
    name: "TVS Apache RTR 200",
    topSpeed: 128,
    fuelEfficiency: 35,
    fuelTank: 12,
    maxRange: 420,
  },
  {
    name: "Kawasaki Ninja 300",
    topSpeed: 180,
    fuelEfficiency: 30,
    fuelTank: 17,
    maxRange: 510,
  },
  {
    name: "Mercedes-Benz Sprinter",
    topSpeed: 120,
    fuelEfficiency: 8,
    fuelTank: 75,
    maxRange: 600,
  },
  {
    name: "Volvo 9700",
    topSpeed: 100,
    fuelEfficiency: 6,
    fuelTank: 300,
    maxRange: 1800,
  },
  {
    name: "Ashok Leyland Bus",
    topSpeed: 80,
    fuelEfficiency: 5,
    fuelTank: 200,
    maxRange: 1000,
  },
  {
    name: "Tata Starbus",
    topSpeed: 90,
    fuelEfficiency: 6,
    fuelTank: 180,
    maxRange: 1080,
  },
];

// Function to retrieve query parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return JSON.parse(decodeURIComponent(params.get("data")));
}

// Function to populate the results table
function populateResults() {
  const results = getQueryParams();
  const resultsTable = document.getElementById("resultsTable");

  // Create the selected vehicle row with a specific style
  const selectedRow = `
        <tr style="background-color: brown; color: white;">
            <td>${results.selected.name}</td>
            <td>${results.selected.topSpeed}</td>
            <td>${results.selected.fuelEfficiency}</td>
            <td>${results.selected.fuelTank}</td>
            <td>${results.selected.maxRange}</td>
            <td>${results.selected.time} hours</td>
            <td>${results.selected.fuelNeeded} liters</td>
            <td class="${
              results.selected.status === "Out of range" ? "out-of-range" : ""
            }">
                ${results.selected.status}
            </td>
        </tr>
    `;
  resultsTable.innerHTML += selectedRow;

  // Populate other vehicles in the table
  results.others.forEach((vehicle) => {
    const row = `
            <tr>
                <td>${vehicle.name}</td>
                <td>${vehicle.topSpeed}</td>
                <td>${vehicle.fuelEfficiency}</td>
                <td>${vehicle.fuelTank}</td>
                <td>${vehicle.maxRange}</td>
                <td>${vehicle.time} hours</td>
                <td>${vehicle.fuelNeeded} liters</td>
                <td class="${
                  vehicle.status === "Out of range" ? "out-of-range" : ""
                }">
                    ${vehicle.status}
                </td>
            </tr>
        `;
    resultsTable.innerHTML += row;
  });
}

// Call the function to populate the results table
populateResults();
