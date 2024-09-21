import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQLa917CjOQ8FyuvjDH4_kB7cKp449sEk",
  authDomain: "future-synapse-429515-a1.firebaseapp.com",
  databaseURL: "https://future-synapse-429515-a1-default-rtdb.firebaseio.com",
  projectId: "future-synapse-429515-a1",
  storageBucket: "future-synapse-429515-a1.appspot.com",
  messagingSenderId: "887901314457",
  appId: "1:887901314457:web:16eb40da041f31b6538708",
  measurementId: "G-0EGQW0NK1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Auth() {

  // Function to sign in using redirect
  const signInWithGoogleRedirect = () => {
    signInWithRedirect(auth, provider)
      .then(() => {
        console.log('Redirect initiated');
      })
      .catch((error) => {
        console.error('Error during sign-in redirect:', error);
      });
  };

  // Use effect to get the result after redirection
  useEffect(() => {
    console.log('Checking redirect result...');
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log('Redirect result:', result);  // Logs the whole result object
          console.log('User Info:', result.user);   // Logs the user info
        } else {
          console.log('No redirect result available.');
        }
      })
      .catch((error) => {
        console.error('Error fetching redirect result:', error);
      });
  }, []);

  return (
    <div>
      <button onClick={signInWithGoogleRedirect}>Sign In with Google</button>
    </div>
  );
}
