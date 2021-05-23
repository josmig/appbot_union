const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("saHello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.datos = functions.https.onRequest((request, response) => {
    response.send('Hola mi nombre es Miguel');
});