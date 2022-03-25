
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyA0hdhgZP9jrt-JR6X4UOsEm1kMA_Fl36g",
      authDomain: "project1-b050e.firebaseapp.com",
      databaseURL: "https://project1-b050e-default-rtdb.firebaseio.com",
      projectId: "project1-b050e",
      storageBucket: "project1-b050e.appspot.com",
      messagingSenderId: "191805466663",
      appId: "1:191805466663:web:0b9089f6a2da975b420602",
      measurementId: "G-TEWB5MKMML"
    };
    
    // Initialize Firebase
    firebase.intializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
