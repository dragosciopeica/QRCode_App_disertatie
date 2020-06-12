// // The Firebase Admin SDK to access Cloud Firestore.
// import * as functions from 'firebase-functions';
// const admin = require('firebase-admin');
// admin.initializeApp();
// var stripe = require('stripe')('sk_test_dy8Us3Z5xSa8SytJdKQMGFKB00ke8H0fry');



// // When a user is created, register them with Stripe
// exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  
//   const customer = stripe.customers.create({description: 'My First Test Customer (created for API docs)'});  
//   //  const customer = await stripe.customers.create({email: user.email});
//     return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
//   });

  




// // from: https://firebase.google.com/docs/functions/get-started
  
// // Take the text parameter passed to this HTTP endpoint and insert it into 
// // Cloud Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req: any, res:any) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//     const writeResult = await admin.firestore().collection('messages').add({original: original});
//     // Send back a message that we've succesfully written the message
//     res.json({result: `Message with ID: ${writeResult.id} added.`});
//   });

//   // Listens for new messages added to /messages/:documentId/original and creates an
// // uppercase version of the message to /messages/:documentId/uppercase
// exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
// .onCreate((snap: any, context:any) => {
//   // Grab the current value of what was written to Cloud Firestore.
//   const original = snap.data().original;

//   // Access the parameter `{documentId}` with `context.params`
//   console.log('Uppercasing', context.params.documentId, original);
  
//   const uppercase = original.toUpperCase();
  
//   // You must return a Promise when performing asynchronous tasks inside a Functions such as
//   // writing to Cloud Firestore.
//   // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
//   return snap.ref.set({uppercase}, {merge: true});
// });



// /// -----



