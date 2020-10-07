// patientsWeighingLessThan.js
const patients = require("./patients");
const testWeight = 75;
const weight = process.argv[2];

const patientsWeightLessThan = (patientsArray, weight) => {
  return patientsArray.filter((patient) => patient.weight < weight);
};

const weightFilteredArr = patientsWeightLessThan(patients, weight);

console.log("OUTPUT", weightFilteredArr);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHT LESS THAN ${weight}`, weightFilteredArr.length);
