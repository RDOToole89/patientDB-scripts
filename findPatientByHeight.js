// patients taller than input height
const patients = require("./patients");
const testHeight = 1.75;
const height = process.argv[2];

const findPatientByHeight = (patientArray, height) => {
  return patientArray.filter((patient) => patient.height > height);
};

const filterByHeightArr = findPatientByHeight(patients, testHeight);
console.log("OUTPUT", filterByHeightArr);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS TALLER THAN ${height}`, filterByHeightArr.length);
