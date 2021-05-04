import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAt6FqxeK4SCyP__gsN_WM1m-KE_2Q44u4",
  authDomain: "pranzo-5dcc6.firebaseapp.com",
  projectId: "pranzo-5dcc6",
  storageBucket: "pranzo-5dcc6.appspot.com",
  messagingSenderId: "136447132331",
  appId: "1:136447132331:web:9b8c6266c9aa2dde2b2dee",
  measurementId: "G-ZGYHXDTH4X",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
