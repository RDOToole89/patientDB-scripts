const patients = require("./patients");

const displayDataAnonymized = (patientsArray) => {
  return patientsArray.map((patient) => {
    const { id, age } = patient;
    return `id: ${id} || age: ${age}`;
  });
};

const anonymousPatientArr = displayDataAnonymized(patients);

console.log(anonymousPatientArr);
