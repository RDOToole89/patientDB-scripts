const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function (patient) {
  return id === patient.id;
});

console.log(specificPatient);
