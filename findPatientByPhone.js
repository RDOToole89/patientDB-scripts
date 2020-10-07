const patients = require("./patients");
const phone = process.argv[2];
const testPhone = "+254-379-520-2026";

const findPatientsByPhone = (patientsArray, phoneNumber) => {
  return patientsArray.find((patient) => patient.phoneNumber === phoneNumber);
};

console.log(findPatientsByPhone(patients, testPhone));
