importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyCNJlIeEHTNd61nkHOwM1XzJHvd1jkHqm0",
    authDomain: "e-cell-iitb.firebaseapp.com",
    databaseURL: "https://e-cell-iitb.firebaseio.com",
    projectId: "e-cell-iitb",
    storageBucket: "e-cell-iitb.appspot.com",
    messagingSenderId: "25208360514",
    appId: "1:25208360514:web:3f785a8eed0451849ce7db"
});


const messaging = firebase.messaging();