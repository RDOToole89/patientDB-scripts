const patients = require("./patients");

const displayPhoneNumbers = (patientsArray) => {
  return patientsArray.map((patient) => {
    const { phoneNumber, firstName, lastName } = patient;
    return `${firstName} ${lastName} || tel: ${phoneNumber}`;
  });
};

const phoneNumberList = displayPhoneNumbers(patients);
console.log("Phone List", phoneNumberList);
