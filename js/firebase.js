
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBP47PairlOssHpL0iMLk4Kmw5WbUm2Dqg",
  authDomain: "admmusic-96dce.firebaseapp.com",
  databaseURL: "https://admmusic-96dce.firebaseio.com",
  projectId: "admmusic-96dce",
  storageBucket: "admmusic-96dce.appspot.com",
  messagingSenderId: "426214881911"
};
firebase.initializeApp(config);

var db = firebase.database().ref().child("text");
//Obtener elementos
//  const preObject = document.getElementById('objeto');

 //Crear Referencias
 const dbRefObject = firebase.database().ref().child('text');

 // Sincronizar cambios objeto
 dbRefObject.on('value', snap => console.log(snap.val()));
// db.ref('metadata').set({
// 	app:"music"
// });
