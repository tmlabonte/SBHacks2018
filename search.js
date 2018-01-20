var searchBar = document.getElementById("searchBar");
var song = searchBar.value;
console.log(song);

// Search for a specified string.
function search() {
  var q = song;
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}