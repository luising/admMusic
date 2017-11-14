function getRequest()
{
  var list = [];
  db.on('value', function(snapshot){
    Clientdb = snapshot.child("Client");
    Servicedb = snapshot.child("Service");
    Requestdb = snapshot.child("Request");

    Requestdb.forEach(function(child){
      Request = child.val();
      Client = Clientdb.child(Request.ClientId).val();
      Service = Servicedb.child(Request.ServiceId).val();
      list.push({
        Nombre:Client.Name,
        Ubicacion:Client.Dress,
        Servicio:Service.Time,
      });
      console.log(list[0]);
      getRows(list);
      // $.each(child.val(), function(key, value) {
      //   console.log(key,value);
      // });
    });
  });
}

getRequest();
