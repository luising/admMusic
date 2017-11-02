
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

function getData()
{
  // obtener datos del cliente
  Client.Name = document.cform.Name.value
  Client.Dress =document.cform.Dress.value
  Client.Phone = document.cform.Phone.value

  // obtener datos del servicio
  Service.Time = document.cform.CountHours.value
  Service.Cost = 0.0
  Service.Date = document.cform.Date.value
  // guardar servicio y cliente
  var newClient =  db.child("Client").push(Client);
  var newService = db.child("Service").push(Service);

  // generando solicitud
  Request.ServiceId = newService.key
  Request.ClientId = newService.key

  // guardando solicitud
  var newRequest = db.child("Request").push(Request);

}

function getRequest(){
  db.child("Request").on('value', function(snapshot) {
    snapshot.forEach(function(child) {
    createHeaders(child.val());
    showItems(child.val(), child.key);
  });
}


function createHeaders(data) {
    var html = '';
    html += '<tr>';
    $.each(data, function(key, value) {
        html += '<th>' + key + '</th>';
    });
    html += '<th class="text-right">';
    html += '</tr>';

    $("#tableHeaders").append(html);
}

function showItems(data, key) {
    var html = '';
    html += '<tr>';
    $.each(data, function(key, value) {
        html += '<td>' + value + '</td>';
    });
    html += '<td class="text-right"><a href="/" class="btn btn-primary btn-sm"><i class="fa fa-pencil"></i> Edit</a> <a href="/" class="btn btn-danger btn-sm"><i class="fa fa-times"></i> Delete</a></td>';
    html += '</tr>';

    $('#results').append(html);
}
