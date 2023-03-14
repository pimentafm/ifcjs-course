import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTBdagIhNnW8iZOEuWWauO37AYG7z6Yzw",
  authDomain: "fir-ifcjs-course-d11f0.firebaseapp.com",
  projectId: "fir-ifcjs-course-d11f0",
  storageBucket: "fir-ifcjs-course-d11f0.appspot.com",
  messagingSenderId: "115803997000",
  appId: "1:115803997000:web:71fd70aed13fd97337e97d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
