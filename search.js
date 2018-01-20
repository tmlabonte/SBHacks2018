// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var id = response.items[0].id.videoId;
    var src = 'https://img.youtube.com/vi/' + id + '/1.jpg';
    var url = 'https://youtube.com/watch?v=' + id;
    console.log(url);
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyB0xaH8jN_ZhFwflugHhfPJPkZEPXSjKeY');
    search();
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}

function search() {
	// check if user entered a song
	if (window.location.href != "https://tmlabonte.github.io/SBHacks2018/")
	{
		var cities = ["Los Angeles", "New York", "New Delhi", "Sydney", "Beijing", "Rio", "London", "Lagos", "Moscow", "Cairo", "Tokyo", "Cape Town", "Bogota"];
	    for (var i=0; i < cities.length; i++) {
	    	// Use the JavaScript client library to create a search.list() API call.
	    	var request = gapi.client.youtube.search.list({
	    	    q: query.song + " dance " + cities[i],
	    	    maxResults: 1,
	    	    part: "id"
	    	}); 
	    	
	    	// Send the request to the API server,
	    	// and invoke onSearchRepsonse() with the response.
	    	request.execute(onSearchResponse);
	    }
	}
}
