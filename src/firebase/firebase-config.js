import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   databaseURL: `${process.env.REACT_APP__FIREBASE_DATABASE_URL}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
//   measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAqeSZQ42JoAWsI7kga_FLlW2HBPWJON10',
  authDomain: 'idm363-f389b.firebaseapp.com',
  databaseURL: 'https://idm363-f389b-default-rtdb.firebaseio.com',
  projectId: 'idm363-f389b',
  storageBucket: 'idm363-f389b.appspot.com',
  messagingSenderId: '229416924670',
  appId: '1:229416924670:web:2d662d393a84c644607caf',
  measurementId: 'G-BY0SCGVR9Y',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
