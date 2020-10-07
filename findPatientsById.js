const patients = require("./patients");
const id = parseInt(process.argv[2]);

const findPatientById = (patientsArray, id) => {
  const retrievedPatient = patientsArray.find((patient) => id === patient.id);

  if (retrievedPatient) {
    return retrievedPatient;
  } else if (retrievedPatient === undefined || typeof process.argv[2] === "number") {
    console.log(`
        Your input ${process.argv[2]}, which is not a valid input.

        Please input the ID as a whole number.

        Example: $ node findPatientById.js 2420

        If the patient can still not be found there is no record available.
    `);
  }
};

// ARROW Function with implicit returns
const findPatientById2 = (patientsArray, id) => patientsArray.find((patient) => id === patient.id);

const validatePatientRecord = (pattiensArray, id) => {
  if (!findPatientById2(patients, id)) {
    console.log(`No record found.`);
  }
  process.exit();
};

const validatePatientInput = (argv) => {
  const input = process.argv[2];
  if (input === undefined) {
    console.log("No input provided! Please provide an input");
  } else if (input.length !== 3 || typeof input === "number") {
    console.log(`You entered ${input}, which is not a valid input.`);
  }

  process.exit();
};

validatePatientInput(process.argv);
validatePatientRecord(patients, id);
console.log(findPatientById2(patients, id));
