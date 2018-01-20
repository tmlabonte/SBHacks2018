var searchBar = document.getElementById("searchBar");
var song = searchBar.value;
function getInput(ele) {
    if(event.key === 'Enter') {
        console.log(ele.value);
    }
}
console.log(song);

// Search for a specified string.
function search() {
  var q = song;
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
}
