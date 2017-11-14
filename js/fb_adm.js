
function getRequest()
{
  db.child("Request").on('value', function(snapshot)
                      {
                          snapshot.forEach(function(child)
                          {
                            getRow(child.val());
                          });
                      });
}

function getRow(data) {
    var html = '<div class="row">';
    $.each(data, function(key, value) {
        getClient("Client", value);
        html += '<div class="cell">' + key + '</div>';
    });
    html += '</div>';

    $("#table").append(html);
}

getRequest()
