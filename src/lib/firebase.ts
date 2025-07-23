import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDu_sHRlv2UwAGmnpLBv5dYRUwzoG_im98",
  authDomain: "aff-tournament.firebaseapp.com",
  projectId: "aff-tournament",
  storageBucket: "aff-tournament.firebasestorage.app",
  messagingSenderId: "180328926458",
  appId: "1:180328926458:web:fdfcda4a074651a1decd43"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
