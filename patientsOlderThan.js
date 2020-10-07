const patients = require("./patients");
const testAge = 65;
const age = parseInt(process.argv[2]);

const patientsOlderThan = (patientsArray, age) => {
  return patientsArray.filter((patient) => patient.age > age);
};

// console.log(patientsOlderThan(patients, age));

const patientsFilterArr = patientsOlderThan(patients, age);
console.log("OUTPUT", patientsFilterArr);
console.log("TOTAL NR PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}`, patientsFilterArr.length);
