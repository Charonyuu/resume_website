// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/


const admin = require('firebase-admin')
require('dotenv').config();
const { Buffer } = require('buffer');

admin.initializeApp({
  credential: admin.credential.cert({
  "type": process.env.VITE_FIREBASE_TYPE,
  "project_id": process.env.VITE_FIREBASE_PROJECT_ID,
  "private_key_id": process.env.VITE_FIREBASE_PRIVATE_KEY_ID,
  "private_key": Buffer.from(process.env.VITE_FIREBASE_PRIVATE_KEY_BASE64, 'base64').toString(),
  "client_email": process.env.VITE_FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.VITE_FIREBASE_CLIENT_ID,
  "auth_uri": process.env.VITE_FIREBASE_AUTH_URL,
  "token_uri": process.env.VITE_FIREBASE_TOKEN_URL,
  "auth_provider_x509_cert_url": process.env.VITE_FIREBASE_AUTH_PROVIDE_X509_CERT_URL,
  "client_x509_cert_url": process.env.VITE_FIREBASE_CLIENT_X509_CERT_URL
}
),
  databaseURL: process.env.VITE_FIREBASE_DATABASEURL
})

const db = admin.firestore()


exports.handler = async (event, context) => {
  const id = event.queryStringParameters.id;

  const snapshot = await db.collection("user").doc('note').collection('note_list').doc(id).get();
  const data = snapshot.data()

  return {
    statusCode: 200,
    body: JSON.stringify(
      data
    )
  }
}
