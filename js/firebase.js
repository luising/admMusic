
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

var db = firebase.database().ref();

var Request = {
    ServiceId: "",
    ClientId: "",
    isAcept: 0
  };

var Service = {
    Time: "",
    Cost: "",
    Date: ""
  };

var Client = {
    Name: "",
    Phone: "",
    Dress: "",
  };
