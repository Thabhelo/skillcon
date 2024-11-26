import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCgvc2gM6PIeNWXdYyzZnrVoFBnlyzpCNQ",
  authDomain: "skillcon-5a5fc.firebaseapp.com",
  projectId: "skillcon-5a5fc",
  storageBucket: "skillcon-5a5fc.firebasestorage.app",
  messagingSenderId: "659795856207",
  appId: "1:659795856207:web:49ee581185a1b97564533a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);