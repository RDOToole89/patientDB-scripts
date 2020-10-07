const patients = require("./patients");

const displayPatientBMI = (patientsArray) => {
  return patientsArray.map((patient) => {
    const { gender, lastName, height, weight } = patient;
    const prefix = gender === "m" ? "Mr." : "Mrs.";
    const BMI = weight / (height * height);

    return `${prefix} ${lastName}'s BMI is: ${Math.round(BMI)}`;
  });
};

const patientBMIList = displayPatientBMI(patients);

console.log(patientBMIList);
