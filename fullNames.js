const patients = require("./patients");

// const fullnames = (patientsArray) => {
//   return patientsArray.map((patient) => {
//     const { firstName, lastName } = patient;
//     return `${firstName} ${lastName}`;
//   });
// };

// const fullNamesArr = fullnames(patients);
// console.log(`There are ${fullNamesArr.length} entries in this array`, fullNamesArr);

const fullNames = (patientsArray) => {
  return patientsArray.map((patient) => {
    const { firstName, lastName } = patient;
    return `${firstName} ${lastName}`;
  });
};

console.log(fullNames(patients));
