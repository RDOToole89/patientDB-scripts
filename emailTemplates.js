const patients = require("./patients");

const patientTemplateGen = (patientsArray) => {
  return patientsArray.map((patient) => {
    const { lastName, gender } = patient;
    const prefix = gender === "m" ? "Mr" : "Mrs";
    return `
        <html>
            <head>
                <title>Thanks for your participation</title>
            </head>
            <body>
                <h1>You are awesome</h1>

                <p>

                    Dear ${prefix} ${lastName},

                    Thank you for participating in this study ...

                </p>
            </body>
        </html>
    `;
  });
};

const patientTemplates = patientTemplateGen(patients);
console.log(patientTemplates[0]);
console.log(patientTemplates[1]);
