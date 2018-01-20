// Search for a specified string.
function search() {
  var q = query["song"];
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
}
