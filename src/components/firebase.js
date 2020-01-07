import { rtdbPlugin } from 'vuefire';
import Vue from 'vue';
Vue.use(rtdbPlugin)

// Initialize Firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// var firebaseConfig = {
//   apiKey: "AIzaSyCgMepQbExLpEIK5VQbMQ8AK05scOPzTs4",
//   authDomain: "water-club-sheet.firebaseapp.com",
//   databaseURL: "https://water-club-sheet.firebaseio.com",
//   projectId: "water-club-sheet",
//   storageBucket: "water-club-sheet.appspot.com",
//   messagingSenderId: "247738795710",
//   appId: "1:247738795710:web:e43d8cc81b956fd0a800ef",
//   measurementId: "G-H7Q0FPKGQ4"
// };
// firebase.initializeApp(firebaseConfig);

export const db = firebase
  .initializeApp({ databaseURL: 'https://water-club-sheet.firebaseio.com'})
  .database();