/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyC9iT5YHbjAiUT3v9Eqkys4LpkYVSbt1tI",
  authDomain: "friendlychat-186ac.firebaseapp.com",
  projectId: "friendlychat-186ac",
  storageBucket: "friendlychat-186ac.appspot.com",
  messagingSenderId: "197617120743",
  appId: "1:197617120743:web:54c180dbbe0731bcd1f942",
  measurementId: "G-C67QYN0B2B"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
