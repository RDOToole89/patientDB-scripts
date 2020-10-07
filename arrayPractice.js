const patients = require("./patients");

// console.log(patients);
// DIY

// - console.log the second patient from the array
// - console.log the last patient from the array

console.log(patients[patients.length - 1]);

// const { firstName: name, lastName: lastname, email: email } = patients[0];
// console.log(name);
// console.log(lastname);
// console.log(email);

const displayPatients = (patientsObject) => {
  patientsObject.forEach((patient) => {
    console.log(patient);
  });
};

const displayPatients2 = (patientsObject) => {
  for (let i = 0; i < patients.length; i++) {
    console.log(patientsObject[i]);
  }
};

const displayPatientNames = (patientsObject) => {
  patientsObject.forEach((patient) => {
    const { firstName: name, lastName: lastname } = patient;
    console.log(patient.firstName);
  });
};

// console.log(displayPatientNames(patients));

const displayFullName = (patient) => {
  const { firstName, lastName, gender } = patient;
  const prefix = gender === "m" ? "Mr." : "Mrs.";
  console.log(`${prefix} ${firstName} ${lastName}`);
};

// patients.forEach(displayFullName);

const displayPatientWeight = (patient) => {
  const { firstName, lastName, weight } = patient;
  console.log(`
    ${firstName}, ${lastName} weighs ${weight}kg`);
};

// patients.forEach(displayPatientWeight);

const displayNameAndGender = (patient) => {
  const { firstName, lastName, gender } = patient;
  console.log(`
        name: ${firstName}
        lastname: ${lastName}
        gender: ${gender}
    `);
};

// patients.forEach(displayNameAndGender);

const formalGreeting = (patient) => {
  const { firstName, lastName } = patient;

  console.log(`
        Pleased to meet you my name is ${firstName} ${lastName}
    `);
};

// patients.forEach(formalGreeting);

const findPatientById2 = (patientsObject, id) => {
  console.log(patientsObject[id]);
};

// findPatientById(patients, 2420);

// takes in a patientObject and a patientId
// patients.find((patient, id) => {
//   if (patient.id === id) {
//     return true;
//   } else {
//     return false;
//   }
// });

const specificPatient = patients.find(function (patient) {
  return id === patient.id;
});

console.log(specificPatient);
