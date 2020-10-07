const patients = require("./patients");

const displayPatientBMR = (patientsArray) => {
  return patientsArray.map((patient) => {
    const { gender, lastName, height, weight, age } = patient;
    const prefix = gender === "m" ? "Mr." : "Mrs.";
    const heightInCm = height * 100;
    let BMR;

    if (gender === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * age + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * age - 150;
    }

    return `${prefix} ${lastName}'s BMR is: ${Math.round(BMR)}`;
  });
};

const patientBMRList = displayPatientBMR(patients);

console.log(patientBMRList);
