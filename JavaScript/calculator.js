console.log("Loaded Calculator");
const salaryInput = document.getElementById("salary");
const yearSelecter = document.getElementById("yearSelecter");
let selectedYear = yearSelecter.value;

yearSelecter.addEventListener("change", function() {
  selectedYear = yearSelecter.value;
});


function calculateTaxAndSalary() {
  console.log("salary: ",salaryInput.value , selectedYear);
  console.log(selectedMonthlyOrAnnual, selectedBruttoOrNetto);
}

const monthlyOrAnnualRadios = document.querySelectorAll('input[name="monthlyOrAnnual"]');
const bruttoOrNettoRadios = document.querySelectorAll('input[name="bruttoOrNetto"]');

let selectedMonthlyOrAnnual;
let selectedBruttoOrNetto;

monthlyOrAnnualRadios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    selectedMonthlyOrAnnual = event.target.value;
    performCalculations();
  });
});

bruttoOrNettoRadios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    selectedBruttoOrNetto = event.target.value;
    performCalculations();
  });
});

function performCalculations() {
  if (selectedMonthlyOrAnnual && selectedBruttoOrNetto) {
    // Perform your calculations here
  }
}

