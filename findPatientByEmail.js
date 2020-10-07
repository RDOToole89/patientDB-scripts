const patients = require("./patients");
const email = process.argv[2];
// console.log(email);
// const email = "srosengartj@salon.com";

const findPatientByEmail = (patientArray, userEmail) => {
  return (requestedPatient = patientArray.find((patient) => patient.email === userEmail));
};

const validatePatientRecord = (patientsArray, email) => {
  if (!findPatientByEmail(patients, email)) {
    console.log(`No record found.`);
  }
  process.exit();
};

const validatePatientInput = (argv) => {
  const input = process.argv[2];
  if (input === undefined) {
    console.log("No input provided! Please provide an input");
  } else if (input.length !== 3 || typeof input !== "string") {
    console.log(`You entered ${input}, which is not a valid input.`);
  }

  process.exit();
};

// validatePatientInput(process.argv);
// validatePatientRecord(patients, email);
console.log(findPatientByEmail(patients, email));
